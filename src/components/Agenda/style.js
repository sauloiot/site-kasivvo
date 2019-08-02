import styled from 'styled-components'
import image3 from '../../images/image3.jpg';


export const Container = styled.div`

flex: 1;
display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;    
    border: 1px solid #000;    
    background-image: url(${image3});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
     background-size: cover;
    width: 100%;
    height: 110%;     

    @media only screen and (max-width: 768px) {
        background-position: 65% 10%;
        background-image: url(${image3});
    }   

/* MENU CONFIGS */
a {
    font-size: 40;
    font-weight: 500;
    margin:5px;
    color: #f7f7f7;
    text-decoration: none;
    @media only screen and (max-width: 410px) {
    font: 18px 'Poppins', sans-serif;
    } 

    }
    a:hover { 
    color: #d4d4d4;
    transition: 0.2s;
    }
`;

export const Img = styled.img`
    height: 60px;
    margin-top: 25px;    
    
    @media only screen and (max-width: 768px) {
        height: 40px;
    }   
`;

export const Agenda = styled.div`
    margin-top: 50px;
    width: 90%;
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    color: #fff;

    div{
        margin-bottom:10px;
    }
`;

export const TextCortado = styled.text`
text-decoration: line-through;
`;

export const PagTitle = styled.div`
    margin-top: 40px;
    margin-bottom: -30px; 
    color: #fff;
    font-size: 40px;    
`;
