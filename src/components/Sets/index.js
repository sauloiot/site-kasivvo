import React, { Component } from 'react'
import { Container, Img, MusicContainer, PagTitle } from './style';
import logoKasivvo from '../../images/logoKasivvo.png'
import { Link } from "react-router-dom";


export default class index extends Component {  
    

    render() {
        return (
           <Container >                       
                             
               <Img src={logoKasivvo} className="logoKassivo-logo" alt="logoKasivvo" />

               <div>
               <Link to="/"> Inicio </Link>
               <text>|</text>
               <Link to="/shows"> Agenda </Link>
               <text>|</text>
               <Link to="/sets"> Sets </Link>
               <text>|</text>
               <Link to="/contato"> Contato </Link>               
               </div>  
               
               <PagTitle>
                  <text>
                      SETS
                  </text>
              </PagTitle>


               <MusicContainer>
               <iframe title="InsideForYou003SC" width="600" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/583834137&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
               <iframe title="InsideForYou003MC" width="600" height="180" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FKASIVVO%2Finside-for-you-radio-mix-003-especial-carnaval%2F" frameborder="0" ></iframe>
              
               <iframe title="InsideForYou002SC" width="600" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/571081008&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
               <iframe title="InsideForYou002MC" width="600" height="180" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FKASIVVO%2Finside-for-you-radio-mix-002%2F" frameborder="0" ></iframe>

               <iframe title="InsideForYou001SC" width="600" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/548258064&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
               <iframe title="InsideForYou001MC" width="600" height="180" marginHeight="10" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FKASIVVO%2Finside-for-you-radio-mix-001%2F" frameborder="0" ></iframe>
               
                </MusicContainer>   
               
           </Container>
        )
    }
}
