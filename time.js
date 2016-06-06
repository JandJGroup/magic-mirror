import React from 'react';
import {AnalogClock} from './AnalogClock';

const Time = React.createClass({
  render() {
    return (
      <div>
        <h2> {(new Date()).toString()} </h2>
        <AnalogClock />
        </div>
    );
  }
});

export {Time};
