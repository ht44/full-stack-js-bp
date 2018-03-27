import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { testRequest } from '../../actions';

import { Errors } from '../../../errors'
import './index.css';

const Sample = ({ sample, testRequest }) => (
  <div className="sample">
    <div className="sample-request-status">
      <p>STATUS: { sample.isTestingRequest ? 'ATTEMPT' : 'COMPLETE'}</p>
      <p>RESULT: { sample.text }</p>
      <p>ERROR: { sample.testRequestError }</p>
    </div>
    <Errors/>
    <button className="sample-test" onClick={ () => testRequest('/api/debug') }>Test Request</button>
    <button className="sample-test-error" onClick={ () => testRequest('/api/debug/error') }>Test Request Error</button>
  </div>
)


const mapStateToProps = state => {
  return {
    sample: state.feature.sample
  }
}


const mapDispatchToProps = dispatch => bindActionCreators({
  testRequest
}, dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sample);