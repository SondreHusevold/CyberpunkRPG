import React, { Component } from 'react'
import styles from '../StyleModules/Pictures.module.css';

interface CyberPictureProps {
    src: string;
    alt: string;
    title: string;
    mobile?: string;
    hasLoaded: (hasLoaded: boolean) => void;
}

interface CyberPictureState {
  hasLoaded: boolean;
}

class FadeInPicture extends Component<CyberPictureProps, CyberPictureState> {
  constructor(props: CyberPictureProps) {
      super(props);

      this.state = {
        hasLoaded: false
      }
  }

  public hasLoaded = () => {
    this.props.hasLoaded(true);
  }

  render() {
    if(this.props.mobile != null && this.props.mobile.toLowerCase() != "") {
      return (
        <img className={styles.PictureMobileOnly} style={{objectPosition: this.props.mobile}} onLoad={() => this.hasLoaded()} src={this.props.src} title={this.props.title} alt={this.props.alt} />
      )
    }

    return (
      <div>
          <div className={styles.PictureAnimationWrap}>
            <img className={styles.InterlacedPicture} onLoad={() => this.hasLoaded()} src={this.props.src} title={this.props.title} alt={this.props.alt} />
          </div>
      </div>
    );
  }
}

export default FadeInPicture