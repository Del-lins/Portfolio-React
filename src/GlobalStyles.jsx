import { createGlobalStyle } from "styled-components";

export const GlobalStyleds = createGlobalStyle`

  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: #fff;
  list-style: none;
  text-decoration: none;
}

html {
  scroll-behavior: smooth;
}

html::-webkit-scrollbar {
  width: 0.5rem;
  background: transparent;
}

html::-webkit-scrollbar-thumb {
background: #2e8de7;
}

img {
  max-width: 100%;
}

  body {
    font-family: "Poppins", sans-serif;
    margin: 0 auto;
    max-width: 1120px;
    background: linear-gradient(150deg, #000000, #0c0277);
    background-size: 120% 120%;
    min-height: 100vh;
  }
`;
