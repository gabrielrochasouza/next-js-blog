import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #222;
  box-shadow: 0 0px 104px 4px var(--shadow-color);
  padding: 0 20px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 23;
  .search {
    cursor: pointer;
    svg {
      cursor: pointer;
      font-size: 20px;
    }
  }
  .container-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    padding: 10px 5px;
    svg {
      cursor: pointer;
    }
    nav {
      flex: 1;
      ul {
        align-items: center;
        display: flex;
        gap: 20px;
        li {
          cursor: pointer;
          font-size: 1.4rem;
          text-transform: uppercase;
        }
      }
    }
  }
`;
