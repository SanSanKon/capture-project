import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    @media screen and (max-width: 1700ppx) {
        font-size: 75%;
    }
}

body {
    background-color: #1b1b1b;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}

button {
    background: transparent;
    border: 3px solid #23d997;
    color: white;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;
    font-weight: bold;
    padding: 1rem 2rem;
    transition: all 0.5s ease;
    &:hover {
        background-color: #23d997;
        color: white;
    }
}

h2 {
    font-size: 4rem;
    font-weight: lighter;
}

h3 {
    color: white;
}

h4 {
    font-size: 2rem;
    font-weight: bold;
}

a {
    font-size: 1.1rem;
}

span {
    color:  #23d997;
    font-weight: bold;
}

p {
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
    padding: 3rem 0rem;
}

`;

export default GlobalStyle;