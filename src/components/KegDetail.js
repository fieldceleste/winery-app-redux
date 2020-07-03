import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg,onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Wine Keg Details</h1>
      <h3>{keg.name} - {keg.brand}</h3>
      <p><em>{keg.price}</em></p>
      <p><em>{keg.abv}</em></p>
      <button onClick={ props.onClickingEdit }>Update Wine Keg</button>
      <button onClick={()=> onClickingDelete(keg.id) }>Close Wine Keg</button>
      <hr/>
    </React.Fragment>
  
  );
}
KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};
export default KegDetail;