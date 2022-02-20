import styled from "styled-components";
export default styled.div`
  .card {
    /* change div to reference your elements you put in <Masonry> */
    background-color: white;
    margin: 2rem auto;
    .card-image {
      width: 100%;
      img {
        width: 100%;
        object-fit: cover;
        background-position: center;
      }
    }
    .card-bottom {
      width: 95%;
      margin: auto;
      display: flex;
      flex-direction: column;
      grid-gap: 0.5rem;
      .content-1 {
        display: block;
        .timestamp {
          float: left;
          span {
            color: #767676;
            font-weight: 500;
          }
        }
        .download {
          float: right;
          display: flex;
          grid-gap: 0.5rem;
          justify-content: center;
          align-items: center;

          span,
          svg {
            color: #007cee;
          }
        }
      }
      .content-2 {
        div {
          display: flex;
          flex-direction: column;
          grid-gap: 0.2rem;
          span:nth-child(2) {
            line-height: 1.7rem;
            margin: 0.5rem 0;
          }
        }
        margin-bottom: 3.5rem;
      }
      .content-3 {
        display: flex;
        grid-gap: 2rem;
        margin-bottom: 0.5rem;

        .hearts {
          display: flex;
          justify-content: center;
          align-items: center;
          grid-gap: 0.5rem;
          span {
            color: #9d9d9d;
            font-weight: 500;
          }
          svg {
            color: grey;
          }
        }
        .comments {
          display: flex;
          justify-content: center;
          align-items: center;
          grid-gap: 0.5rem;
          span {
            color: #9d9d9d;
            font-weight: 500;
          }
          svg {
            color: grey;
          }
        }
      }
    }
  }
`;
