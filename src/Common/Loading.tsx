import React, { Component } from 'react'
import animations from '../StyleModules/Animations.module.css';

interface LoadingProps {
  hasLoaded: boolean;
}

class Loading extends Component<LoadingProps, {}> {

  render() {
    if(!this.props.hasLoaded) {
      return <div className={animations.FadeInSlow + " " + animations.loading}><div></div><div></div></div>
    }
    return <div/>
  }
}

export default Loading