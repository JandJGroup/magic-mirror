import React from 'react';
import {AnalogClock} from './AnalogClock';
import {DigitalClock} from "./DigitalClock";

const Time = React.createClass({
  render() {
    return (
      <div>
        <AnalogClock/>
        <DigitalClock/>
        </div>
    );
  }
});

export {Time};
