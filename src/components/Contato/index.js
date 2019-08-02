import React, { Component } from 'react'
import { Container, Img, Contatos, PagTitle } from './style';
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
                      CONTATO
                  </text>
              </PagTitle>

               <Contatos >
                   <div><text>
                       Entrar em contato pelas redes socias ou pelos contatos abaixo:
                       </text></div>
                   <div><text>
                       Saulo Tavares | +55 82 99130-3844 (Telefone e Whatsapp)
                       </text></div>
                       <div><text>
                       Filipe Marquez | +55 82 98843-3141 (Telefone e Whatsapp)
                       </text></div>
                       <div><text>
                        Email: kasivvo@gmail.com
                       </text></div>                       

               </Contatos>

           </Container>
        )
    }
}
