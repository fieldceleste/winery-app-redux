import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete, onClickingBuy } = props;

  return (
    <React.Fragment>
      <h1>Wine Details</h1>
      <h3>Name:{keg.name}</h3>
      <h4>Distributed by:{keg.brand}</h4>
      <p><em>Price per Glass: ${keg.price}.00</em></p>
      <p><em>Alcohol Content: %{keg.abv}.00</em></p>
      <p><em>Glasses Available in Keg: {keg.quantity}</em></p>
      <button onClick={() => onClickingBuy(keg.id) }>Buy a Glass</button> 
      <button onClick={ props.onClickingEdit }>Update Wine Keg</button>
      <button onClick={() => onClickingDelete(keg.id) }>Delete Wine Keg</button>
      <hr/>
    </React.Fragment>
  
  );
}
KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func 
};
export default KegDetail;
 