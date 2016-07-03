import React from 'react';
import {AnalogClock} from './AnalogClock';
import {DigitalClock} from "./DigitalClock";

const Time = React.createClass({
	render() {
		console.log(this.props.scale);
		return (
			<div style={{ position: "absolute", left: this.props.position.x, top: this.props.position.y, }}>
				<AnalogClock scale={this.props.scale}/>
				<DigitalClock scale={this.props.scale}/>

			</div>
		);
	}
});

export {Time};
