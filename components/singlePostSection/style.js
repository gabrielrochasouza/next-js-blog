import styled from "styled-components";

export const SinglePostSectionContainer = styled.section`
  padding: 20px;
  margin: 20px auto;
  width: 95%;
  background-color: var(--bg-s);
  border-radius: 20px;
  overflow: hidden;
  display: block;
  animation: fadeInUp 1s;
  figure {
    overflow: hidden;
    border-radius: 20px;
    width: 100%;
  }
  span,
  h1 {
    display: block;
  }
  h1 {
    width: 100%;
    font-size: 2rem;
  }
  .category {
    color: var(--category-special-color);
  }
  > figure img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  header {
    margin: 20px 0 20px;
    .author-info {
      margin: 9px 0 0;
      padding: 0;
      display: flex;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 0 12px 0 0;
      }
    }
  }
  .content {
    p,
    span,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 3px 0;
      padding: 5px 0;
    }
  }
`;
export const CommentsContainer = styled.section`
  padding: 10px 20px 20px;
  margin: 20px auto;
  width: 95%;
  background-color: var(--bg-s);
  border-radius: 20px;
  overflow: hidden;
  display: block;
  p,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 12px 0;
    padding: 5px 0;
  }
  input,
  textarea {
    border: 1px solid var(--special-color2);
    outline: 0;
    padding: 16px;
    background-color: var(--bg-s);
    color: var(--tx-p);
    border-radius: 8px;
    width: 100%;
    font-size: 1.4rem;
    font-family: "roboto";
    margin: 8px 0;
    transition: 0.5s all;
    :focus {
      transition: 0.5s all;
      border-color: var(--bg-t);
    }
  }
  textarea {
    max-width: 100%;
    min-width: 100%;
    max-height: 200px;
    min-height: 100px;
  }
  .email,
  .name {
    width: calc(50% - 8px);
  }
  .name {
    margin-right: 16px;
  }
  button {
    font-size: 1.3rem;
    background-color: var(--bg-t);
    padding: 16px;
    margin: 8px 0 0;
    border: 0;
    outline: 0;
    color: var(--tx-p);
    border-radius: 10px;
    transition: 1s all;
    :hover {
      transition: 1s all;
      background-color: var(--bg-p);
    }
  }
`;
