import React from 'react';
import {AnalogClock} from './AnalogClock';
import {DigitalClock} from "./DigitalClock";

const Time = React.createClass({
  render() {
    return (
      <div style={{position: "absolute", left: this.props.position.x, top: this.props.position.y,}}>
        <AnalogClock />
        <DigitalClock />
      </div>
    );
  }
});

export {Time};
