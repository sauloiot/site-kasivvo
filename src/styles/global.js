import { createGlobalStyle} from 'styled-components';
//https://fonts.google.com/specimen/Poppins?selection.family=Poppins:400,500
export default createGlobalStyle`
        @import url('https://fonts.googleapis.com/css?family=Poppins:400,500&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            outline: 0;
            box-sizing: border-box;              
        }
        html, body, #root {
            flex: 1;
            flex-direction: column;
            height: 101%;            
        }
        body {             
            font: 25px 'Poppins', sans-serif;
            background: #000000;
            background: #fff;
            color: #fff;
            -webkit-font-smoothing: antialiased !important;
        }        
`;
