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
      {Object.values(props.kegList).map((keg) => {
       return <Keg 
          whenKegClicked = { props.onKegSelection }
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          abv={keg.abv}
          quantity={keg.quantity}
          id={keg.id}
          key={keg.id} />
      })}
      </div>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func
};

export default KegList;
