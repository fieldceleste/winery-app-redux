import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete, onClickingBuy } = props;
  return (
    <React.Fragment>
      <h1>Wine Keg Details</h1>
      <h3>{keg.name} - {keg.brand}</h3>
      <p><em>Price: ${keg.price}.00</em></p>
      <p><em>Alcohol Content: %{keg.abv}.00</em></p>
      <p><em>Glasses Available in Keg: {keg.quantity}</em></p>
      <button onClick={() => onClickingBuy(keg) }>Buy a Glass</button> 
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
 