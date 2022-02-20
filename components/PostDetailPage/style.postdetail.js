import styled from "styled-components";
export default styled.div`
  .landing {
    display: flex;

    .right-panel {
      width: 75%;
      background-color: #f1f1f1;
      grid-gap: 1rem;

      .posts-display {
        width: 70%;
        margin: auto;
        margin: 3rem auto 1rem auto;

        display: flex;
        justify-content: center;
        align-items: center;
        grid-gap: 1rem;
      }
    }
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    .landing {
      .right-panel {
        width: 70%;

        .posts-display {
          width: 80%;
          margin: 3rem auto 1rem auto;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) and (min-width: 640px) {
    .landing {
      .right-panel {
        width: 65%;

        .posts-display {
          width: 80%;
          margin: 3rem auto 1rem auto;
        }
      }
    }
  }
  @media only screen and (max-width: 425px) {
    .landing {
      flex-direction: column;

      .right-panel {
        width: 100%;

        .posts-display {
          width: 95%;
          margin: 3rem auto 1rem auto;
          grid-template-columns: 100%;
        }
      }
    }
  }
`;
