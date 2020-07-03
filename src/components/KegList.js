import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";


function KegList(props) { 
  const myStyledComponentStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
  }
  return (
    <React.Fragment>
       <div style={myStyledComponentStyles}>
      <hr />
      {props.kegList.map((keg) => 
        <Keg 
          whenKegClicked = { props.onKegSelection }
          name={Keg.name}
          brand={Keg.brand}
          price={Keg.price}
          abv={Keg.abv}
          id={Keg.id}
          key={Keg.id} />
      )}
      </div>
    </React.Fragment>
  );
}
// Add propTypes for KegList.
KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;