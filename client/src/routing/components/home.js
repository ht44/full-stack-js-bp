import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Sample } from '../../feature';
import { Errors } from '../../errors';

const Home = () => (
  <div>
    <h1>Home</h1>
    <p>This is the home page</p>
    <Sample />
    <Errors />
  </div>
);

export default Home;