import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions'; 

function KegControl(props){
 const  {masterPostList, formVisibleOnPage, selectedKeg, } = props;

// class KegControl extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // formVisibleOnPage: false,
  //     selectedKeg: null,
  //     editing: false
  //   }; 
  // }

   // handle click function
   handleClick = () => {
    const {dispatch} = props;
    const action = a.toggleForm();
    dispatch(action);
  }
  //   if (this.state.selectedKeg != null) {
  //     this.setState({
  //       formVisibleOnPage: false,
  //       selectedKeg: null,
  //       editing: false,
  //     });
  //   } else {
  //     this.setState(prevState => ({
  //       formVisibleOnPage: !prevState.formVisibleOnPage,
  //     }));
  //   }
  // }

  // for adding new Keg
  handleAddingNewKegToList = (newKeg) => {
    const {dispatch} = props;
    const {name, brand, price, abv, quantity, id} = newKeg;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2)
  }
  //   const { dispatch } = this.props;
  //   const {  name, brand, price, abv, quantity, id } = newKeg;
  //   const action = {
  //     type: 'ADD_KEG',
  //     name: name,
  //     brand: brand,
  //     price: price,
  //     abv:abv, 
  //     quantity:quantity,
  //     id: id
  //   }
  //   dispatch(action);
  //   this.setState({formVisibleOnPage: false});
  // }

    //for updating
    handleChangingSelectedKeg = () => {  //id
      const { dispatch } = props;
      const action = a.selectedKeg(null);
      dispatch(action);
    
    //   const selectedKeg = this.props.masterKegList[id];
    //   this.setState({selectedKeg: selectedKeg});
    // }


    // for deleting
    handleDeletingKeg = (id) => {
      const { dispatch } = this.props;
      const action = {
        type: 'DELETE_KEG',
        id: id
      }
      dispatch(action);
      this.setState({selectedKeg: null});
    }

    // for editing
    handleEditClick = () => {
      this.setState({editing: true});
    }

    // for editing Keg in list
    handleEditingKegInList = (kegToEdit) => {
      const { dispatch } = props;
      const action = a.toggleForm();
      dispatch(action);
      const action2 = a.addKeg(kegToEdit);
      dispatch(action2);
    }                   // handleSelectedPotionRefresh();
  //     const { dispatch } = this.props;
  //     const { name, brand, price, abv, quantity, id } = kegToEdit;
  //     const action = {
  //       type: 'ADD_KEG',
  //       name: name,
  //       brand: brand,
  //       price: price,
  //       abv:abv, 
  //       quantity:quantity,
  //       id: id
  //    }
  //   dispatch(action);
  //   this.setState({
  //     editing: false,
  //     selectedKeg: null
  //   });
  // }


    // for buying a glass
    handleBuyGlass = (id) => {
      // const buyGlass = this.state.masterKegList.filter(keg => keg.id === id)[0];
      const buyGlass = this.props.masterKegList[id];
     if (buyGlass.quantity > 0 ) {
        buyGlass.quantity -= 1
     }
      this.setState({
        selectedKeg: null,
        editing: false
      });
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
      kegList={this.props.masterKegList} 
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
 KegControl.propTypes = {
  masterKegList: PropTypes.object
};


const mapStateToProps = state => {
  return {
    masterKegList: state
  }
}
 KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;
