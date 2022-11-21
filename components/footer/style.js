import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: var(--bg-s);
  margin: 60px 0 0;
  button {
    background-color: var(--special-color1);
    color: #fff;
    cursor: alias;
    svg {
      border: 0;
      outline: 0;
    }
  }
  h4 {
    font-size: 1.5rem;
  }
  .formInput {
    display: flex;
    gap: 5px;
    margin: 20px 0 0;
  }
  section form {
  }
  input,
  button {
    padding: 10px 16px;
    font-size: 18px;
    border: 2px solid #eee;
    outline: none;
    border-radius: 12px;
  }
  input::placeholder {
    color: #ddd;
  }
  input {
    background-color: var(--bg-s);
    color: #fff;
  }
  div section {
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: center;
    color: var(--tx-p);
    text-align: center;
    padding: 20px;
    svg {
      font-size: 30px;
      cursor: pointer;
      transition: 1s all;
      :hover {
        color: var(--special-color1);
        transition: 1s all;
      }
    }
  }
  p {
    background-color: var(--bg-t);
    padding: 10px;
    font-size: 1rem;
    text-align: center;
  }
`;
