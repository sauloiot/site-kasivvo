import React, { Component } from 'react'
import { Container, Img, Agenda, TextCortado, PagTitle } from './style';
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
                      AGENDA
                  </text>
              </PagTitle>
               <Agenda>
                   <div><TextCortado>
                       17 de Agosto - Ork Music Sessions BDAY (Ork Music Sessions) - Maceió,AL
                       </TextCortado></div>

                    <div><TextCortado>
                    22 de Junho - RESET (Ork Music Sessions) - Maceió,AL
                 </TextCortado></div>

                    <div><TextCortado>
                        25 de Maio - Kustom - Maceió,AL
                 </TextCortado></div>
                   
               </Agenda>
               

           </Container>
        )
    }
}
