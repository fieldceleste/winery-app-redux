import React from "react";
import PropTypes from "prop-types";

function Keg (props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
      <h3>{props.name} - {props.brand}</h3>
      <p><em>{props.price}</em></p>
      <p><em>{props.abv}</em></p>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  abv: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;