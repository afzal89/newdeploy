import styled from "styled-components";
export default styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 97px);
  margin-top: 50px;
  .landing {
    width: 100%;
    .top__banner {
      height: 18rem;
      width: 100%;

      .banner-content {
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        position: relative;
        .banner__image {
          width: 100%;
          height: 100%;
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            background-position: center;
          }
        }
        .container {
          position: absolute;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 90%;
          margin: auto;

          h2 {
            font-weight: 700;
            font-size: 2rem;
            margin-bottom: 0.5rem;
            margin-top: 0;
          }
          span {
            letter-spacing: 0.15rem;
          }
          .search-outer {
            max-width: 400px;
            width: 90%;
            margin-top: 1rem;

            height: 35px;
            border-radius: 10px;
            .searchbar {
              display: flex;
              height: 100%;
              grid-gap: 0rem;

              .search-field {
                width: 100%;

                height: 100%;

                input {
                  width: 100%;
                  height: 100%;
                  background-color: #eaeaea;
                  border: none;
                  padding-left: 0.75rem;
                  border-top-left-radius: 70px;
                  border-bottom-left-radius: 70px;
                }
              }
              .search-icon {
                width: 15%;
                height: 100%;
                background: radial-gradient(
                  circle at 30% 107%,
                  #fdf497 0%,
                  #fdf497 5%,
                  #fd5949 45%,
                  #d6249f 60%,
                  #285aeb 90%
                );
                background-color: blue;
                border: none;
                border-top-right-radius: 70px;
                border-bottom-right-radius: 70px;
                display: flex;
                justify-content: center;
                align-items: center;
                svg {
                  font-size: 1.25rem;
                  color: white;
                }
              }
            }
          }
          h2,
          span {
            color: white;
          }
        }
      }
    }
    .hashtag-content {
      width: 90%;
      margin: auto;
      display: flex;
      align-items: center;
      flex-direction: column;
      h2 {
      }
      .hashtags-data {
        width: 100%;
        .hashtag-category {
          background: #f0eded;
          box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.15);
          border-radius: 9px;
          height: fit-content;
          display: flex;
          margin: 2.5rem auto;
          .hashtag-outer {
            width: 95%;
            margin: auto;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            height: 100%;
            span:nth-child(1) {
              font-size: 1.5rem;
              font-weight: 700;
              margin: 0.5rem 0rem 0.5rem 0rem;
            }

            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: flex-start;

            .hashtags-mapping {
              display: flex;
              gap: 1rem;
              overflow-x: hidden;
              overflow-y: hidden;
              white-space: nowrap;
              width: 99%;
              margin: auto;
              height: 68px;
              align-items: center;
              a {
                height: 92%;
              }
              .hashtag {
                background: #fffbfb;
                box-shadow: 0px 4px 8px rgba(90, 121, 144, 0.25);
                border-radius: 6px;
                height: 100%;
                width: fit-content;
                display: flex;
                justify-content: center;
                .content {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  margin-left: 1.5rem;
                  margin-right: 1.5rem;
                  h3 {
                    margin: 0;
                  }
                  span {
                    padding-left: 0.8rem;
                    color: #909090;
                  }
                }
              }
            }
            .views-all {
              display: flex;
              flex-wrap: wrap;
              gap: 1rem;
              width: 100%;
              margin: auto;
              .hashtag {
                background: #fffbfb;
                box-shadow: 0px 4px 8px rgba(90, 121, 144, 0.25);
                border-radius: 6px;
                height: 3.75rem;
                width: fit-content;
                display: flex;
                justify-content: center;
                .content {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  margin-left: 1.5rem;
                  margin-right: 1.5rem;
                  h3 {
                    margin: 0;
                  }
                  span {
                    padding-left: 0.8rem;
                    color: #909090;
                  }
                }
              }
            }
            .hashtag-mapping::-webkit-scrollbar {
              display: none;
            }
            .hashtag-more {
              width: 100%;
              text-align: right;
              padding: 0.5rem;
              margin-bottom: 0.8rem;
              a.view-more {
                padding: 0.3rem;
                cursor: pointer;

                /* width: 100%; */
                /* display: flex; */
                /* justify-content: flex-end; */
                span {
                  font-size: 1rem;
                  color: #007cee;
                }
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 425px) {
    .top__banner {
      .banner-content {
        .container {
          span {
            letter-spacing: 1.05rem;
          }
        }
      }
    }
  }
`;
