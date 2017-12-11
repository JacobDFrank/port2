import React from 'react';
import ReactDOM from 'react-dom'
let testImage = '/assets/empty.gif'
let scriptURL = '/assets/bubble.js'

class Bubble extends React.Component {

  // componentDidMount () {
  //   if (!document.getElementById("boobles")) {
  //     const script = document.createElement("script");
  //     script.setAttribute("id", "boobles");
  //
  //     script.src = __PATH_PREFIX__ + scriptURL;
  //     script.async = true;
  //     script.defer = true;
  //
  //     document.body.appendChild(script);
  //   }
  // }

  componentDidMount() {
    var load = require('load-script')

    load(__PATH_PREFIX__ + scriptURL, function(err, script) {
      if (err) {
        // print useful message
      } else {
        console.log(script.src); // Prints 'foo'.js'
        // use script
        // note that in IE8 and below loading error wouldn't be reported
      }
    })
  }

  render() {
    return (<div>
      <canvas id="bubble" width="640" height="640"></canvas>
      <canvas style={{
          display: 'none'
        }} width="2560" height="2560"></canvas>
      <canvas style={{
          display: 'none'
        }} width="2560" height="2560"></canvas>
      <canvas style={{
          display: 'none'
        }} width="2560" height="2560"></canvas>
      <canvas style={{
          display: 'none'
        }} width="2560" height="2560"></canvas>
    </div>);
  }
}

export default Bubble;
