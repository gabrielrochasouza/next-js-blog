import styled from "styled-components";

export const NewsSectionContainer = styled.section`
  flex: 1;
  margin: 20px 0 0;
  @media (max-width: 1250px) {
    width: 100%;
    flex: auto;
  }
  h1 {
    font-size: 2rem;
    padding: 0 20px;
  }
  .block-list-posts {
    width: 100%;
  }
  .top-cards-news {
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 0 20px;
  }
`;
