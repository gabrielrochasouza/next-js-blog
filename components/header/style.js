import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--bg-s);
  box-shadow: 0 0px 104px 4px var(--shadow-color);
  padding: 0 20px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 23;
  .container-header a svg {
    @media (max-width: 1150px) {
      width: 70px;
      height: 50px;
    }
  }
  .search {
    cursor: pointer;
    svg {
      cursor: pointer;
      font-size: 13px;
    }
  }
  .container-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    padding: 5px 5px;
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
  .fullscreen {
    width: 100%;
    height: 100%;
    background-color: var(--bg-p);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: slideUp 0.4s;
    .input-box {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        font-size: 2rem;
        cursor: pointer;
        margin-right: 2rem;
      }
      input {
        background-color: var(--bg-p);
        border: 0;
        outline: 0;
        padding: 26px;
        color: var(--tx-p);
        font-size: 1.9rem;
        border-bottom: 2px solid var(--tx-p);
      }
    }

    .close-btn {
      position: absolute;
      top: 20px;
      right: 20px;
      color: var(--tx-p);
      font-size: 3rem;
      cursor: pointer;
    }
  }
  @keyframes slideUp {
    from {
      top: 100%;
    }
    to {
      top: 0;
    }
  }
`;
