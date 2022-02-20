import styled from "styled-components";
export default styled.div`
  min-height: calc(100vh - 70px);
  margin-top: 50px;
  .landing {
    display: flex;

    .right-panel {
      width: 75%;
      background-color: #f1f1f1;
      grid-gap: 1rem;
      .stories {
        width: 95%;
        margin: auto;

        h2 {
          letter-spacing: 0.1rem;
          font-size: 2rem;
          font-weight: 500;
          margin-top: 0.5rem;
        }

        .stories-display {
          display: flex;

          overflow-x: scroll;
          overflow-y: hidden;
          white-space: nowrap;
          width: 100%;
          margin: auto;
          -webkit-overflow-scrolling: touch;
        }
        .stories-display::-webkit-scrollbar {
          display: none;
        }
      }
      .mobile-navigation {
        display: none;
      }
      .feed {
        width: 95%;
        margin: auto;

        h2 {
          letter-spacing: 0.1rem;
          font-size: 2rem;
          font-weight: 500;
        }
        .posts-display {
          width: 80%;
          margin: 3rem auto 1rem auto;

          grid-gap: 1rem;
          .my-masonry-grid {
            display: -webkit-box; /* Not needed if autoprefixing */
            display: -ms-flexbox; /* Not needed if autoprefixing */
            display: flex;
            margin-left: -30px; /* gutter size offset */
            width: auto;
          }
          .my-masonry-grid_column {
            padding-left: 30px; /* gutter size */
            background-clip: padding-box;
          }

          /* Style your items */
          .my-masonry-grid_column > .card {
            /* change div to reference your elements you put in <Masonry> */
            background-color: white;
            margin: 2rem auto;
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
                  cursor: pointer;

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
                  }
                }
                margin-bottom: 2.5rem;
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
    }
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    .landing {
      .right-panel {
        width: 70%;
        .feed {
          .posts-display {
            width: 90%;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px) and (min-width: 640px) {
    .landing {
      .right-panel {
        width: 65%;
        .feed {
          .posts-display {
            width: 90%;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 425px) {
    .landing {
      flex-direction: column;

      .right-panel {
        width: 100%;
        .mobile-navigation {
          display: flex;
          background-color: white;
          height: 50px;
          justify-content: center;
          align-items: center;
          box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.09);

          .stories {
            float: left;
            width: 50%;
            height: 60%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-right: 1px solid #c7c4c4;

            font-size: 1.3rem;
            font-weight: 700;
            font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
              "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
            a {
              color: #898787;
            }
          }
          .posts {
            float: right;
            width: 50%;
            height: 60%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.3rem;
            font-weight: 700;
            font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
              "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
            a {
              color: #898787;
            }
          }
        }
        .stories {
          h2 {
            margin: 0.5rem auto;
          }
        }
        .feed {
          margin-top: 2rem;
          h2 {
            display: none;
          }
          .posts-display {
            width: 95%;
            margin: auto;
            grid-template-columns: 100%;
          }
        }
      }
    }
  }
`;
