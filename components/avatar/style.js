import styled from "styled-components";

export const AvatarConteiner = styled.div`
  margin: 5px 0;
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  div {
    width: 90%;
  }
  .author-name {
    margin: 0;
    font-weight: 800;
    padding: 0;
    font-size: 1rem;
  }
  img {
    border-radius: 50%;
    width: 50px !important;
    height: 50px !important;
    object-fit: cover;
  }
  .created-at {
    margin: 0;
    padding: 0;
    font-size: 0.7rem;
    font-weight: 300;
    display: block;
  }
`;
