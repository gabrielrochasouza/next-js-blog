import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: var(--bg-s);
  margin: 60px 0 0;

  .social-media {
    display: flex;
    gap: 20px;
    margin: 20px 0;
    @media (max-width: 800px) {
      justify-content: center;
    }
  }
  .column {
    padding: 20px 0;
    text-align: start;
    max-width: 330px;
    min-width: 310px;
    width: 95%;
    flex: 1;
    p {
      line-height: 1.8rem;
      font-size: 0.8rem;
    }
    @media (max-width: 800px) {
      width: 100%;
      margin: 0 auto;
      text-align: center;
    }
  }
  @media (max-width: 550px) {
    .about-us {
      display: none;
    }
  }
  button {
    background-color: var(--special-color1);
    color: #fff;
    svg {
      border: 0;
      outline: 0;
    }
  }
  h3 {
    font-size: 1.2rem;
    margin: 0 0 40px;
    @media (max-width: 460px) {
      margin: 0 0 10px;
    }
  }
  form {
    display: flex;
    margin: 40px 0;
    justify-content: center;
    @media (max-width: 800px) {
      margin: 30px 0 0px;
    }
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
    font-size: 1rem;
    border: 2px solid var(--bg-t);
    outline: none;
    border-radius: 10px;
  }
  button {
    margin-left: -30px;
    background-color: var(--bg-t);
  }

  input {
    background-color: var(--bg-s);
    color: #fff;
  }
  div section {
    display: flex;
    gap: 80px;
    justify-content: start;
    align-items: start;
    color: var(--tx-p);
    text-align: center;
    padding: 25px 30px 100px;
    flex-wrap: wrap;
    svg {
      font-size: 2rem;
      cursor: pointer;
      transition: 1s all;
      :hover {
        color: var(--bg-t);
        transition: 1s all;
      }
    }
    @media (max-width: 800px) {
      gap: 10px;
      padding: 25px 30px 10px;
      justify-content: center;
    }
  }
  .right-reserved {
    background-color: var(--bg-t);
    padding: 10px;
    width: 100%;
    font-size: 1rem;
    text-align: center;
  }
`;
