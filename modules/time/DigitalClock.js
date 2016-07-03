//Orginally copied from http://jsfiddle.net/rainev/vx4r5qzv/
import React from 'react';
var DigitalClockFace = React.createClass({
	render: function () {
		var d = this.props.date;
		var millis = d.getMilliseconds();
		var second = d.getSeconds() * 6 + millis * (6 / 1000);
		var minute = d.getMinutes(); // Get minute number
		var minuteZero = (minute <= 9) ? "0" : ""; // Add a zero in front of single digit numbers
		var hour = d.getHours(); // Get hour number;
		var postm = (hour >= 12) ? "PM" : "AM";

		// this has to be done after postm calculation
		if (hour === 0) {
			hour = 12;
		}
		hour %= 12; // Convert to 12 12 hour format
		console.log(this.props);
		return (
			<div className="digitalClock" style={{ height: 330 * this.props.scale, fontSize: 330 * this.props.scale }}>
				<div className="digitalHour">{hour}</div>
				<div className="digitalMinute">{minuteZero + minute}</div>
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
		return <DigitalClockFace date={this.state.date} scale={this.props.scale}/>;
	}
});

export {DigitalClock};
