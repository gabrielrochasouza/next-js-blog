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
        border-radius: 10px;
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
        max-width: 400px;
        position: sticky;
        top: 108px;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        @media (max-width: 1250px) {
            width: 100%;
            max-width: none;
            padding: 0 10px;
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
        color: var(--tx-p);
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
        --tx-s: #ddd;
        --bg-p: #111;
        --bg-s: #191919;
        --bg-t: #574ac7;
        --bg-t-hover: #576ac7;
        --border-color: #444;
        --special-color1: #d4d4d4;
        --special-color2: #bab1ff;
        --shadow-color:rgba(0,0,0,0.2);
        --category-special-color: #7573ff;
        @media (max-width: 460px) {
            font-size: 13px;
        }
    }
    ::-webkit-scrollbar {
        height: 0;
    }
    .otherPosts {
        padding: 0 40px 20px;
    }
    @keyframes fadeIn {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    @keyframes fadeInUp {
        from{
            opacity: 0;
            transform: translateY(100px);
        }
        to{
            opacity: 1;
            transform: translateY(0px);
        }
    }
`;
