import styled from "styled-components";

export const SinglePostSectionContainer = styled.section`
  padding: 30px;
  margin: 20px auto;
  width: 95%;
  background-color: var(--bg-s);
  border-radius: 20px;
  overflow: hidden;
  display: block;
  figure {
    overflow: hidden;
    border-radius: 20px;
    width: 100%;
    height: 500px;
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
    margin: 20px 0 40px;
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
      margin: 12px 0;
      padding: 5px 0;
    }
  }
`;
