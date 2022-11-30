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
  @media (max-width: 450px) {
    padding: 13px;
  }
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
      line-height: 2.3rem;
    }
    li,
    ul,
    ol {
      line-height: 2.3rem;
      list-style: initial;
      padding: 0 0 0 20px;
      margin: initial;
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
    border: 1px solid var(--border-color);
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
    max-height: 60px;
    width: 140px;
    border: 0;
    outline: 0;
    color: var(--tx-p);
    border-radius: 10px;
    transition: 1s all;
    :hover {
      transition: 1s all;
      background-color: var(--bg-t-hover);
    }
  }
  @media (max-width: 450px) {
    button,
    input,
    textarea {
      padding: 10px;
    }
  }
  .comment {
    .comment-initials-name {
      border-radius: 50%;
      text-align: center;
      width: 56px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
      background-color: var(--bg-t);
      color: var(--tx-p);
      font-size: 1.6rem;
      cursor: pointer;
    }
    .comment-content {
      flex: 1;
      h4,
      p {
        margin: 0px 0 0;
        line-break: anywhere;
      }
      h4 {
        padding: 0 0 4px 0;
        font-size: 1.1rem;
      }
      p {
        padding: 0 30px 0 0;
      }
    }
    .config {
      position: absolute;
      top: 0;
      right: 0;
      display: none;
      border-radius: 50%;
      cursor: pointer;
      :hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
      svg {
        color: var(--tx-p);
        font-size: 1.2rem;
        margin: 5px;
      }
    }
    :hover {
      .config {
        display: inline-flex;
      }
    }
    position: relative;
    margin: 0 0 32px;
    display: flex;
    gap: 16px;
    .datetime {
      font-weight: 100;
      color: var(--tx-s);
      font-size: 0.9rem;
    }
  }
  .showMore {
    width: initial;
    margin: 0 auto;
    text-align: center;
  }
  .top-cards-news {
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 0 0px;
    h2,
    p,
    span {
      margin: 0;
      padding: 0;
    }
  }
`;
