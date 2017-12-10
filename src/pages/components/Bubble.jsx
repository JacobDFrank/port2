import React from 'react';
import jawn from '../../assets/jawn.js';

class Bubble extends React.Component {

  render() {
    return (<div>
      <canvas id="jawn" width="640" height="640"></canvas>
      <script src={jawn}></script>
      <canvas style={{display: 'none'}} width="2560" height="2560"></canvas>
      <canvas style={{display: 'none'}} width="2560" height="2560"></canvas>
      <canvas style={{display: 'none'}} width="2560" height="2560"></canvas>
      <canvas style={{display: 'none'}} width="2560" height="2560"></canvas>
    </div>);
  }
}

export default Bubble;
