import React, { Component } from 'react'
import { Container, Img } from './style';
import facebook from '../../icons/facebook.svg';
import instagram from '../../icons/instagram.svg';
import soundcloud from '../../icons/soundcloud.svg';
import youtube from '../../icons/youtube.svg';
import mixcloud from '../../icons/mixcloud.svg';

export default class index extends Component {
    openFacebook() {
        window.open('https://www.facebook.com/kasivvo/');
      }
      openInstagram() {
        window.open('https://www.instagram.com/kasivvo/');
      }
      openSoundCloud() {
        window.open('https://soundcloud.com/kasivvo');
      }
      openYoutube() {
        window.open('https://www.youtube.com/channel/UCJ7czLLaFJ_zbFHeMcinQAw');
      }
      openMixcloud() {
        window.open('https://www.mixcloud.com/KASIVVO');
      }
    
    render() {
        return (
            <Container>
                <a onClick={this.openFacebook}> <Img src={facebook} className="facebook-logo" alt="facebook" /></a>
                <a onClick={this.openInstagram}> <Img src={instagram} className="instagram-logo" alt="instagram" /></a>
                <a onClick={this.openSoundCloud}> <Img src={soundcloud} className="soundcloud-logo" alt="soundcloud" /></a>
                <a onClick={this.openYoutube}>  <Img src={youtube} className="youtube-logo" alt="youtube" /></a>
                <a onClick={this.openMixcloud}> <Img src={mixcloud} className="mixcloud-logo" alt="mixcloud" /></a>
                
            </Container>
        )
    }
}
