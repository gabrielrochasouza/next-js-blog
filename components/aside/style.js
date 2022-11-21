import styled from "styled-components";

export const AsideContainer = styled.aside`
  .avatar div {
    width: 90%;
  }
  p,
  span,
  a {
    transition: 0.3s;
    :hover {
      transition: 0.3s;
      color: var(--special-color1);
    }
  }
  .go-back {
    background-color: var(--bg-t);
    padding: 8px;
    border-radius: 10px;
    color: var(--tx-p);
    border: 0;
    outline: 0;
    cursor: pointer;
    transition: 1s all;
    font-size: 0.8rem;
    :hover {
      transition: 1s all;
      background-color: var(--category-special-color);
    }
  }
`;
