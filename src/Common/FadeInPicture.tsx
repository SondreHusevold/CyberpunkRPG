import React, { Component } from 'react'
import styles from '../StyleModules/Pictures.module.css';
import animations from '../StyleModules/Animations.module.css';

interface CyberPictureProps {
    src: string;
    alt: string;
    title: string;
}

interface CyberPictureState {
  hasLoaded: boolean;
}

// This component is used to fade in the images, mostly due to InterlacedPicture looking awful when the picture hasn't loaded yet.
class FadeInPicture extends Component<CyberPictureProps, CyberPictureState> {
  constructor(props: CyberPictureProps) {
      super(props);

      this.state = {
        hasLoaded: false
      }
  }

  public hasLoaded = () => {
    this.setState({ hasLoaded: true });
  }

  public renderLoading = () => {
    if(!this.state.hasLoaded) {
      return (
        <div className={animations.loading}><div></div><div></div></div>
      )
    }
    return "";
  }

  render() {
    return (
      <div>
        {this.renderLoading()}
        <div className={styles.PictureAnimationWrap + " " + (!this.state.hasLoaded ? styles.NonloadedPicture : "")}>
            <img className={styles.InterlacedPicture} onLoad={() => this.hasLoaded()} src={this.props.src} title={this.props.title} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}

export default FadeInPicture