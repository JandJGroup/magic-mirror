//Orginally copied from http://jsfiddle.net/rainev/vx4r5qzv/
import React from 'react';
var DigitalClockFace = React.createClass({
  render: function() {
    var d = this.props.date;
    var millis = d.getMilliseconds();
    var second = d.getSeconds() * 6 + millis * (6 / 1000);
    var minute = d.getMinutes(); // Get minute number
    var hour = d.getHours(); // Get hour number;
    var postm = (hour >= 12) ? "PM" : "AM";

    // this has to be done after postm calculation
    if(hour === 0) { 
      hour = 12;
    }
    hour %= 12; // Convert to 12 12 hour format

    return (
      <div className="digitalClock">
        <div className="digitalHour">{hour}</div> 
        <div className="digitalMinute">{minute}</div>       
        <div className="digitalPostM">{postm}</div>
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

var DigitalClock = React.createClass({
  getInitialState: function() {
    return { date: new Date() };
  },
  componentDidMount: function() {
    this.start();
  },
  start: function() {
    var self = this;
    (function tick() {
      self.setState({ date: new Date() });
      requestAnimationFrame(tick);
    }());
  },
  render: function() {
    return <DigitalClockFace date={this.state.date} />;
  }
});

export {DigitalClock};
