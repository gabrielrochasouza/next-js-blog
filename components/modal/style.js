import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 1s;
  .modal-box {
    border-radius: 10px;
    background-color: var(--bg-s);
    max-width: 400px;
    width: 95%;
    display: flex;
    flex-direction: column;
  }
  .modal-header {
    border-bottom: 1px solid #333;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
      color: #fff;
      cursor: pointer;
      font-size: 28px;
    }
  }
  .modal-content {
    padding: 20px;
    form {
      display: flex;
      flex-direction: column;
      gap: 24px;
      input,
      button {
        font-size: 1rem;
        border-radius: 10px;
        border: 0;
        outline: 0;
        padding: 15px 8px;
        color: var(--tx-p);
      }
      input {
        border: 1px solid #444;
        background-color: transparent;
      }
      button {
        background-color: var(--bg-t);
        transition: 1s all;
        :hover {
          transition: 1s all;
          background-color: var(--bg-t-hover);
        }
      }
    }
    .change-modal {
      font-size: 0.8rem;
      text-align: center;
      .change-modal-link {
        color: var(--bg-t);
        cursor: pointer;
      }
    }
  }
`;
