import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null,
      editing: false,
      minVal: 0
    }; 
  }

  // for adding new Keg
    handleAddingNewKegToList = (newKeg) => {
      const newMasterKegList = this.state.masterKegList.concat(newKeg);
      this.setState({
        masterKegList: newMasterKegList,
        formVisibleOnPage: false 
     });
    }

    //for updating
    handleChangingSelectedKeg = (id) => {
      const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
      this.setState({
        selectedKeg: selectedKeg
      });
    }
    // for deleting
    handleDeletingKeg = (id) => {
      const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
      this.setState({
        masterKegList: newMasterKegList,
        selectedKeg: null
      });
    }
    // for editing
    handleEditClick = () => {
      this.setState({editing: true});
    }

    // for editing Keg in list
    handleEditingKegInList = (kegToEdit) => {
      const editedMasterKegList = this.state.masterKegList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(kegToEdit);
      this.setState({
          masterKegList: editedMasterKegList,
          editing: false,
          selectedKeg: null
        });
    }


    // for buying a glass
    handleBuyGlass = (id) => {
      id.quantity -= 1; 
      const editedMasterKegList = this.state.masterKegList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(id);
      this.setState({
        masterKegList: editedMasterKegList,
        selectedKeg: null
      });
    }
    

    handleClick = () => {
      if (this.state.selectedKeg != null) {
        this.setState({
          formVisibleOnPage: false,
          selectedKeg: null,
          editing: false,
        });
      } else {
        this.setState(prevState => ({
          formVisibleOnPage: !prevState.formVisibleOnPage,
        }));
      }
    }
  


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    
    if (this.state.editing ) {               /////Edit form
      currentlyVisibleState = <EditKegForm 
      keg = {this.state.selectedKeg} 
      onEditKeg= {this.handleEditingKegInList} />
      buttonText = "Return to Keg List";

    }else if(this.state.selectedKeg != null) {    ///// Keg Details
      currentlyVisibleState = <KegDetail 
      keg = {this.state.selectedKeg} 
      onClickingDelete = {this.handleDeletingKeg} 
      onClickingEdit = {this.handleEditClick} 
      onClickingBuy = {this.handleBuyGlass} />
      buttonText = "Return to Keg List";
    
    }else if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm                    ///New Keg
      onNewKegCreation={this.handleAddingNewKegToList} /> 
      buttonText = "Return to Keg List"; 

    } else {
      currentlyVisibleState = <KegList                     // Keg List
      kegList={this.state.masterKegList} 
      onKegSelection={this.handleChangingSelectedKeg} />
      buttonText = "Add Keg"; 

    } return (
      <React.Fragment>                       
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
 } 


export default KegControl;


// if (buyGlass >= 0){
//   return "Out of Stock"
//  } else {
//    buyGlass.quantity -= 1;
//  }
//  return buyGlass
// }