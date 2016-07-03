//Orginally copied from http://jsfiddle.net/rainev/vx4r5qzv/
import React from 'react';
var ClockFace = React.createClass({
  render: function () {
    var d = this.props.date;
    var millis = d.getMilliseconds();
    var second = d.getSeconds() * 6 + millis * (6 / 1000);
    var minute = d.getMinutes() * 6 + second / 60;
    var hour = ((d.getHours() % 12) / 12) * 360 + 90 + minute / 12;

    var xspacing = 20    // Distance between each horizontal location
    var w;                // Width of entire wave
    var theta = 0.0;      // Start angle at 0
    var amplitude = 75.0; // Height of wave
    var period = 500.0;   // How many pixels before the wave repeats
    var dx;               // Value for incrementing x
    var yvalues;  // Using an array to store height values for the wave

    w = width + 16;
    dx = (TWO_PI / period) * xspacing;
    yvalues = new Array(floor(w / xspacing));


    theta += 0.02;

    // For every x value, calculate a y value with sine function
    var x = theta;
    for (var i = 0; i < yvalues.length; i++) {
      yvalues[i] = sin(x) * amplitude;
      x += dx;
    }
    return (
      <div className="circle"  style={{ height: 240 * this.props.scale, width: 240 * this.props.scale }}>
        <div className="face">
          <div className="second" style={transform(rotate(second)) } />
          <div className="hour" style={transform(rotate(hour)) } />
          <div className="minute" style={transform(rotate(minute)) } />
        </div>
      </div>
    );
  }
});

function transform(str) {
  return { transform: str };
}

function rotate(deg) {
  return 'rotate(' + deg + 'deg)';
}

var AnalogClock = React.createClass({
  getInitialState: function () {
    return { date: new Date() };
  },
  componentDidMount: function () {
    this.start();
  },
  start: function () {
    var self = this;
    (function tick() {
      self.setState({ date: new Date() });
      requestAnimationFrame(tick);
    } ());
  },
  render: function () {
    return <ClockFace date={this.state.date} scale={this.props.scale}/>;
  }
});

export {AnalogClock};
