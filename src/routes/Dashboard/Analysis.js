import React, { Component } from 'react';
import { connect } from 'dva';
import HelloMessage from './HelloMessage';
import Timer from './Timer';

@connect(state => ({
  chart: state.chart,
}))
export default class Analysis extends Component {
  state = {};

  componentDidMount() {}

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <HelloMessage name="Kerry Wang" />
        <Timer />
      </div>
    );
  }
}
