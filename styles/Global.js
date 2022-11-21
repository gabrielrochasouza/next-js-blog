import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: var(--bg-p);
        color: var(--tx-p);
        font-family: 'Lexend', sans-serif;
        overflow-x: hidden;
    }
    .container {
        max-width: 1300px;
        margin: 0 auto;
    }
    .flex-container{
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
    }

    .box {
        padding: 16px;
        background-color: var(--bg-s);
        border-radius: 12px;
        p{
            margin: 16px 0;
        }
    }
    .flex1 {
        flex: 1;
        @media (max-width: 1250px) {
            width: 100%;
            flex: auto;
        }
    }
    main {
        margin: 24px 0 ;

    }
    button {
        cursor: pointer;
    }
    input {
        outline: 0;
    }
    main section {
        display: flex;
        flex-wrap:wrap;
        gap: 16px;
    }
    aside {
        width: 100%;
        max-width: 440px;
        position: sticky;
        top: 108px;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        @media (max-width: 1250px) {
            width: 100%;
            max-width: none;
        }
    }
    .avatar{
        margin: 10px 0 ;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 0 12px 0 0;
        img{
            border-radius: 10px;
            object-fit: cover;
        }
        div{
            flex: 1;
            span{
                font-size: 0.6rem;
            }
            p{
                font-size: 0.95rem;
                margin: 0;
                padding: 0;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                width: 95%;
            }
        }
    }
    a {
        color: #fff;
        text-decoration: none;
    }
    figcaption {
        display: none;
    }
    ul, li {
        list-style: none;
    }
    :root {
        --tx-p: #fff;
        --bg-p: #111;
        --bg-s: #222;
        --bg-t: #574ac7;
        --special-color1: #d4d4d4;
        --special-color2: #bab1ff;
        --shadow-color:rgba(0,0,0,0.2);
        --category-special-color: #f0f;
        @media (max-width: 460px) {
            font-size: 10px;
        }
    }

`;
