import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { resetErrors } from '../../actions';
import './index.css';


const Errors = ({ errors, addError, resetErrors }) => {

  let errorMarkup = errors.map((error, index) =>
    <p key={index}>{ error }</p>
  );

  return (
    <div className="errors">
      <button onClick={ resetErrors }>Reset Errors</button>
      <div>{ errorMarkup }</div>
    </div>
  )

};


const mapStateToProps = state => {
  return {
    errors: state.errors
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  resetErrors
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Errors);