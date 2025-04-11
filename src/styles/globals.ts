import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${({ theme }) => theme["green-500"]};
    }
    body {
        font-family: 'Roboto',sans-serif;
        background-color: ${({ theme }) => theme["gray-900"]};
        color: ${({ theme }) => theme["gray-300"]};
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    button {
        font-family: inherit;
        cursor: pointer;
    }
    input, textarea {
        font-family: inherit;
        font-size: inherit;
    }
    ul, li {
        list-style: none;
    }
    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }
    p { 
        margin: 0;
    }
    img {   
        max-width: 100%;
        height: auto;
    }
    hr {    
        border: none;
        border-top: 1px solid #ccc;
    }
    table { 
        border-collapse: collapse;
        width: 100%;
    }
    th, td {    
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }
    th {    
        background-color: #f2f2f2;
    }
`;
