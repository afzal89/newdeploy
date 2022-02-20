import styled from "styled-components";
export default styled.div`
  margin-top: 60px;
  .hashtag-heading {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    span {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
  .hashtag-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: calc(100vh - 97px);

    .posts-display {
      width: 80%;
      margin: 3rem auto 1rem auto;

      grid-gap: 1rem;
      .no-posts {
        width: 100% !important;
        div {
          margin-bottom: 8rem;
        }
      }
      .my-masonry-grid {
        display: -webkit-box; /* Not needed if autoprefixing */
        display: -ms-flexbox; /* Not needed if autoprefixing */
        display: flex;
        /* gutter size offset */
        width: auto;
      }
      .my-masonry-grid_column {
        /* gutter size */
        background-clip: padding-box;
      }

      /* Style your items */
      .my-masonry-grid_column > .card {
        /* change div to reference your elements you put in <Masonry> */
        background-color: white;
        margin: 1rem 0.5rem;

        .card-image {
          width: 100%;
          img,
          video {
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
                cursor: pointer;
              }
            }
          }
          .content-2 {
            div {
              display: flex;
              width: 100%;
              flex-direction: column;
              flex-wrap: wrap;
              grid-gap: 0.2rem;
              span:nth-child(2) {
                width: 100%;

                line-height: 1.7rem;
                margin: 0.5rem 0;
                overflow: hidden;
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
    }
  }

  @media only screen and (max-width: 425px) {
    .posts-display {
      .my-masonry-grid_column > .card {
        margin: 2rem 0.5rem !important;
      }
    }
  }
`;
