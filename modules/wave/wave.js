import React from 'react';
import 'whatwg-fetch';
import {key} from "./key";
import "./wave.css";
const Wave = React.createClass({

	getInitialState() {
		return {
			data: {},
		};
	},

	componentDidMount() {
		fetch("http://api.wunderground.com/api/" + key + "/conditions/q/US/NH/Mirror_Lake.json")
			.then((data) => data.json())
			.then((json) => {
				const windSpeed = 5; // In MPH
				const windDir = 90; // In degrees

				const ocean = document.getElementById("ocean");
				const waveWidth = (windSpeed + 1) / 8;
				const waveCount = Math.floor(window.innerWidth / waveWidth);
				const docFrag = document.createDocumentFragment();

				for (var i = 0; i < waveCount; i++) {

					var wave = document.createElement("div");
					wave.className += " wave";

					docFrag.appendChild(wave);
					wave.style.left = window.innerWidth - (i * waveWidth) + "px";
					wave.style.webkitAnimationDelay = (i / 100) + "s";
				}
				ocean.appendChild(docFrag);
				this.setState({
					data: json.current_observation,
				});

			}
			);
	},

	render() {
		const pos = this.props.position;
		return (
			<div>
				<h2> this.state.data </h2>
				<div style={{ height: pos.height, left: pos.x, top: pos.y }} id="ocean">

				</div>
			</div>



		);
	},
});


export {Wave};
