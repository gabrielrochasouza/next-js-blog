import styled from "styled-components";

export const LoadContainer = styled.div`
  margin: 0 auto;
  .loading {
    --speed-of-animation: 0.9s;
    --gap: 6px;
    --first-color: var(--bg-s);
    --second-color: var(--tx-p);
    --third-color: var(--bg-s);
    --fourth-color: var(--tx-p);
    --fifth-color: var(--bg-s);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    gap: 6px;
    margin: 0 auto;
    height: 15px;
  }

  .loading span {
    width: 4px;
    height: 10px;
    background: var(--first-color);
    animation: scale var(--speed-of-animation) ease-in-out infinite;
  }

  .loading span:nth-child(2) {
    background: var(--second-color);
    animation-delay: -0.8s;
  }

  .loading span:nth-child(3) {
    background: var(--third-color);
    animation-delay: -0.7s;
  }

  .loading span:nth-child(4) {
    background: var(--fourth-color);
    animation-delay: -0.6s;
  }

  .loading span:nth-child(5) {
    background: var(--fifth-color);
    animation-delay: -0.5s;
  }
  @keyframes scale {
    0%,
    40%,
    100% {
      transform: scaleY(0.05);
    }

    20% {
      transform: scaleY(1);
    }
  }
`;
