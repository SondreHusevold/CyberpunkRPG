import React, { Component } from 'react'
import LazyLoad from 'react-lazyload';
import { Transition } from 'react-transition-group';
import styles from '../StyleModules/Pictures.module.css';

interface CyberPictureProps {
    src: string;
    alt: string;
    title: string;
}

interface CyberPictureState {
    loaded: boolean;
}

class FadeInPicture extends Component<CyberPictureProps, CyberPictureState> {
    constructor(props: CyberPictureProps) {
        super(props);

        this.state = {
            loaded: false
        }
    }

    onLoad = () => this.setState({ loaded: true });
   
    render() {
      return (
        <LazyLoad offset={150}>
          <Transition in={this.state.loaded} timeout={300}>
            {state =>
              <div className={"fadeInPicture"[state]}>
                <img style={{padding: "10px" }} className={styles.InterlacedPicture} alt={this.props.alt} src={this.props.src} />
              </div>}
          </Transition>
        </LazyLoad>
      );
    }
  }

export default FadeInPicture