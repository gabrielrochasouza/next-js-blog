import styled from "styled-components";

export const NewsBlockContainer = styled.div`
  width: 100%;
  @media (max-width: 1250px) {
    width: 95%;
  }
  margin: 0px auto 20px;
  background-color: var(--bg-s);
  padding: 20px 20px 0;
  border-radius: 20px;
  @media (max-width: 550px) {
    padding: 15px 15px 0;
  }
  figure {
    width: 100%;
    height: 400px;
    border-radius: 20px;
    overflow: hidden;
    @media (max-width: 550px) {
      height: 300px;
    }
  }
  figure,
  img {
  }
  figure img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: 2s all;
    :hover {
      transform: scale(1.4);
      transition: 2s all;
    }
  }
  div {
    padding: 10px;
    p {
      font-size: 0.7rem;
    }
  }
  .category {
    color: var(--category-special-color);
  }
  .author-info {
    margin: 9px 0 0;
    padding: 0;
    display: flex;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
`;
