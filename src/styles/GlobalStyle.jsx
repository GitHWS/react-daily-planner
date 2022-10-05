import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
*,
  :after,
  :before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
html {
  word-break: keep-all;
  font-size: 62.5%; //(10/16*100)
  * {
      -ms-overflow-style: none; 
      scrollbar-width: none; 
      ::-webkit-scrollbar {
        display: none; 
      }
    }
    @media screen and (max-width: 767px) {
    _::-webkit-full-page-media, _:future, :root .safari_only {
        padding-bottom: 65px; //resize 
    }
}
}
body, html, #root {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
button {
  cursor: pointer;
  border: none;
  outline: none;
}
input{
  :focus{outline:none}
}
:root {
    
    --color-white: #ffffff;
    --color-black: #000;
    --color-border: #E8E8E8;
    --color-background : #07001B;
;
  
  }
`;

export default GlobalStyle;
