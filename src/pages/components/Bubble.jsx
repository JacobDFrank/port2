import React from 'react';

const testImage = '/assets/empty.gif';
// const scriptURL = '/assets/bubble.js';
const scriptURL = '/assets/uncompiled.js';

class Bubble extends React.Component {
  componentDidMount() {
    const load = require('load-script');

    load(__PATH_PREFIX__ + scriptURL, (err, script) => {
      if (err) {
        // print useful message
      } else {
        console.log(script.src); // Prints 'foo'.js'
        // use script
        // note that in IE8 and below loading error wouldn't be reported
      }
    });
  }

  render() {
    return (<div>
      <canvas id="bubble" width="720" height="720" />
      <canvas
        style={{
          display: 'none',
        }}
        width="2560"
        height="2560"
      />
      <canvas
        style={{
          display: 'none',
        }}
        width="2560"
        height="2560"
      />
      <canvas
        style={{
          display: 'none',
        }}
        width="2560"
        height="2560"
      />
      <canvas
        style={{
          display: 'none',
        }}
        width="2560"
        height="2560"
      />
    </div>);
  }
}

export default Bubble;
