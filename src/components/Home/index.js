import React, { Component } from 'react'
import { Container, Img, Text, DivText } from './style';
import logoKasivvo from '../../images/logoKasivvo.png'
import { Link } from "react-router-dom";
import InstagramEmbed from 'react-instagram-embed';

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

               <DivText><Text>A música faz parte do nosso DNA. Desde que me lembro, ela sempre fez parte das nossas vidas.</Text></DivText> 
              
               <InstagramEmbed
                url='https://www.instagram.com/p/By6MAF3FRfU/'
                maxWidth={320}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
                />

               </Container>
        )
    }
}
