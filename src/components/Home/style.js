import styled from 'styled-components'
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';

export const Container = styled.div`

flex: 1;
display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;    
    border: 1px solid #000;    
    background-image: url(${image1});
    opacity: 1;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
     background-size: cover;
    width: 100%;    

    @media only screen and (max-width: 768px) {
        background-position: 35% 15%;
        background-image: url(${image2});
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

export const DivText = styled.text`
    margin-top:15px;    
    width: 80%;
    margin-bottom: 10px;
`;

export const Text = styled.text`
    width: 25%;
`;
