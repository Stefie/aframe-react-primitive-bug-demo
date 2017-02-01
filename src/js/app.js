import 'aframe';
import 'aframe-animation-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Sky from './components/Sky';

class VRScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '3',
      radiusOuter: '1',
      cylinderHeight: '2'
    };
  }

  changeRadiusOuter() {
    const radiusOuter = ['1', '0.5', '0.3', '0.7', '1.3'];
    this.setState({
      radiusOuter: radiusOuter[Math.floor(Math.random() * radiusOuter.length)]
    });
  }
  changeWidth() {
    const width = ['1', '2', '3', '4', '5'];
    this.setState({
      width: width[Math.floor(Math.random() * width.length)]
    });
  }
  changeCylinderHeight() {
    const cylinderHeight = ['0.5', '1', '1.5', '2', '2.5'];
    this.setState({
      cylinderHeight: cylinderHeight[Math.floor(Math.random() * cylinderHeight.length)]
    });
  }

  render () {
    return (
      <Scene>
      <a-assets></a-assets>

      <Camera>
        <a-cursor animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150"> </a-cursor>
      </Camera>

      <Sky src="url(https://rawgit.com/aframevr/assets/gh-pages/360-image-gallery-boilerplate/img/sechelt.jpg)"/>

      <Entity
        primitive='a-plane'
        geometry={{ width: this.state.width, height: '2' }}
        material={{color: 'blue' }}
        position='-4 2.5 -8'
        onClick={this.changeWidth.bind(this)} />
      <Entity
        geometry={{ primitive: 'plane', width: this.state.width, height: '2' }}
        material={{color: 'blue' }}
        position='-4 -1.5 -8'
        onClick={this.changeWidth.bind(this)} />

      <Entity
        primitive='a-ring'
        geometry={{ radiusOuter: this.state.radiusOuter, radiusInner: '0.2' }}
        material={{color: 'red' }}
        position='0 2.5 -8'
        onClick={this.changeRadiusOuter.bind(this)} />
      <Entity
        geometry={{ primitive: 'ring', radiusOuter: this.state.radiusOuter, radiusInner: '0.2' }}
        material={{color: 'red' }}
        position='0 -1.5 -8'
        onClick={this.changeRadiusOuter.bind(this)} />

      <Entity
        primitive='a-cylinder'
        geometry={{ height: this.state.cylinderHeight, thetaLength: '360' }}
        material={{color: 'green' }}
        position='4 2.5 -8'
        onClick={this.changeCylinderHeight.bind(this)} />
      <Entity
        geometry={{ primitive: 'cylinder', height: this.state.cylinderHeight, thetaLength: '360' }}
        material={{color: 'green'}}
        position='4 -1.5 -8'
        onClick={this.changeCylinderHeight.bind(this)} />
      </Scene>
    );
  }
}

ReactDOM.render(<VRScene/>, document.querySelector('.scene-container'));
