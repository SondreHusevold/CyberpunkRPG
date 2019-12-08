import React, { Component } from 'react'
import styles from '../StyleModules/Pictures.module.css';
import Loading from './Loading';

interface CyberPictureProps {
    src: string;
    alt: string;
    title: string;
    mobile?: string; 
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
    this.setState({ hasLoaded: true });
  }

  public renderLoading = () => {
    if(!this.state.hasLoaded) {
      return <Loading />
    }
    return <div/>;
  }

  render() {
    if(this.props.mobile != null && this.props.mobile.toLowerCase() != "") {
      return (
        <img className={styles.PictureMobileOnly} style={{objectPosition: this.props.mobile}} onLoad={() => this.hasLoaded()} src={this.props.src} title={this.props.title} alt={this.props.alt} />
      )
    }

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