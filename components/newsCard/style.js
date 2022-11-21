import styled from "styled-components";

export const NewsCardContainer = styled.div`
  border-radius: 16px;
  min-width: 240px;
  width: 240px;
  height: 300px;
  a {
    color: var(--tx-p);
  }
  .info > h2 {
    font-size: 1.1rem;
  }
  .info > span {
    font-size: 0.9rem;
  }
  figure,
  a figure .bg-img {
    width: 100%;
    height: 100%;
  }
  figure {
    position: relative;
    overflow: hidden;
    border-radius: 16px;
    .bg-img {
      transition: 2s all;
      height: 100%;
      object-fit: cover;
    }
  }
  figure:hover,
  .bg:hover,
  .info:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: 2s all;
  }
  figure:hover > img {
    transition: 2s all;
    transform: scale(1.1);
  }
  .bg {
    transition: 2s all;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 20;
  }
  position: relative;

  .info {
    position: absolute;
    bottom: 0px;
    height: 100%;
    padding: 30px 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    z-index: 21;
  }
`;
