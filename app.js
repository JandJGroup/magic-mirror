import React from 'react';
import ReactDOM from 'react-dom';

import { Time } from './modules/time/time';

const master = {
  time: Time,
};


const App = React.createClass({

  getInitialState() {
    return {};
  },

  componentDidMount() {
    this.setState({
      components: [
        {
          key: "time",
          position: {
            x: 50,
            y: 50,
          },
          tz: "est",
        }


      ]
    });
  },

  render() {
    const toRenderCompons = this.state.components && this.state.components.map((comp, idx) => {
      return React.createElement(master[comp.key], {key: idx, position: comp.position}) ;
    });
    return (
      <div>
        {toRenderCompons}
      </div>
    );

  },

});



ReactDOM.render(<App />,  document.getElementById('app'));
