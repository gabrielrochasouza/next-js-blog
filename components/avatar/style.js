import styled from "styled-components";

export const AvatarConteiner = styled.div`
  margin: 5px 0;
  display: flex;
  gap: 5px;
  align-items: center;
  div {
    width: 90%;
  }
  .author-name {
    margin: 0;
    padding: 0;
    font-size: 0.9rem;
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
    display: block;
  }
`;
