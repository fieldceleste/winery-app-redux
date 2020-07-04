import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Wine Name' />
        <input
          type='text'
          name='brand'
          placeholder='Wine Brand' />
        <input
          type='number'
          name='price'
          placeholder='Price per Keg' />
          <input
          type='number'
          name='abv'
          placeholder='Alcohol Content %' />
        <br/>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;