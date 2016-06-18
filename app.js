import React from 'react';
import ReactDOM from 'react-dom';

import { Time } from './modules/time/time';
import { Wave } from './modules/wave/wave';

const master = {
  time: Time,
  wave: Wave,
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
        },
        {
          key: "wave",
          position: {
            x: 0,
            y: 1000,
            height: 300
            
          }
        }


      ]
    });
  },

  render() {
    const toRenderCompons = this.state.components && this.state.components.map((comp, idx) => {
      const Component = master[comp.key];
      return <Component key={idx} position={comp.position} />;
    });
    return (
      <div>
        {toRenderCompons}
      </div>
    );

  },

});



ReactDOM.render(<App />,  document.getElementById('app'));
