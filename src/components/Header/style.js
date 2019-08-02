import styled from 'styled-components'

export const Container = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    background: #000;
`;
export const Img = styled.img`
    height: 40px;
    width: 40px;
    margin: 5px;
    margin-bottom: -5px;
    cursor: pointer;    

    @media only screen and (max-width: 768px) {
    height: 50px;
    width: 50px;
  }
    
`
