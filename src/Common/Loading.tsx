import React, { Component } from 'react'
import animations from '../StyleModules/Animations.module.css';

class Loading extends Component {

  render() {
    return <div className={animations.loading}><div></div><div></div></div>
  }
}

export default Loading