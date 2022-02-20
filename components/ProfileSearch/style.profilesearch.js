import styled from "styled-components";
export default styled.div`
  margin-bottom: 4rem;
  min-height: calc(100vh - 97px);
  margin-top: 60px;
  .navigation {
    display: flex;
    background-color: white;
    height: 50px;
    width: 70%;
    margin: auto;
    justify-content: center;
    align-items: center;
    background-color: #e7e7e7;
    margin: 2rem auto;

    .profile {
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
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        text-decoration: none;
        span {
          color: black;
          margin: 0.3rem 1rem;
          font-size: 1.15rem;
          letter-spacing: 0.1rem;
        }
      }
      a:hover {
        background: radial-gradient(
          circle at 30% 107%,
          #fdf497 0%,
          #fdf497 5%,
          #fd5949 45%,
          #d6249f 60%,
          #285aeb 90%
        );
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        span {
          color: white;
          margin: 0.3rem 1rem;
          font-size: 1.15rem;
          letter-spacing: 0.1rem;
        }
      }
      a.active {
        background: radial-gradient(
          circle at 30% 107%,
          #fdf497 0%,
          #fdf497 5%,
          #fd5949 45%,
          #d6249f 60%,
          #285aeb 90%
        );
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        span {
          color: white;
          margin: 0.3rem 1rem;
          font-size: 1.15rem;
          letter-spacing: 0.1rem;
        }
      }
    }
    .hashtag {
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
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        span {
          color: black;
          margin: 0.3rem 1rem;
          font-size: 1.15rem;
          letter-spacing: 0.1rem;
        }
      }
      a:hover {
        background: radial-gradient(
          circle at 30% 107%,
          #fdf497 0%,
          #fdf497 5%,
          #fd5949 45%,
          #d6249f 60%,
          #285aeb 90%
        );
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        span {
          color: white;
          margin: 0.3rem 1rem;
          font-size: 1.15rem;
          letter-spacing: 0.1rem;
        }
      }
      .active {
        background: radial-gradient(
          circle at 30% 107%,
          #fdf497 0%,
          #fdf497 5%,
          #fd5949 45%,
          #d6249f 60%,
          #285aeb 90%
        );
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        span {
          color: white;
          margin: 0.3rem 1rem;
          font-size: 1.15rem;
          letter-spacing: 0.1rem;
        }
      }
    }
  }
  .profile-cards {
    width: 80%;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    display: flex;
    /* grid-template-columns: 20% 20% 20% 20% 20%; */
    grid-gap: 1rem;
    margin: auto;
    flex-wrap: wrap;
    margin-top: 2rem;
    margin-top: 60px;
    a {
      width: 20%;
      .profile-card {
        background: #ffffff;
        box-shadow: 2px 5px 9px rgba(0, 0, 0, 0.16);
        border-radius: 30px;
        display: flex;
        width: 100%;
        height: 100%;
        /* height: 280px; */

        align-items: center;
        flex-direction: column;
        .profile-avatar {
          width: 6rem;
          height: 6rem;
          margin-top: 2.6rem;
          border-radius: 50%;
          background: radial-gradient(
            circle at 30% 107%,
            #fdf497 0%,
            #fdf497 5%,
            #fd5949 45%,
            #d6249f 60%,
            #285aeb 90%
          );
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 90%;
            height: 90%;
            object-fit: cover;
            border-radius: 50%;
            background-position: center;
          }
        }
        .profile-info {
          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;
          margin-bottom: 1.5rem;
          max-width: 90%;
          width: 95%;
          .profile-name {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 90%;
            margin: auto;
            span {
              letter-spacing: 0.03rem;
              font-weight: bold;
              font-size: 1.1rem;
              text-align: center;
              white-space: nowrap;
              overflow: hidden;
              max-width: 80%;

              text-overflow: ellipsis;
            }
          }
          p {
            font-size: 1rem;
            margin-top: 0.1rem;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 95%;
            margin: auto;
          }
        }
      }
    }
  }
  .no-result {
    text-align: center;
    grid-column: 1/-1;
  }
  @media only screen and (max-width: 1024px) {
    .profile-cards {
      /* grid-template-columns: 30% 30% 30%; */
      grid-gap: 1.5rem;
      a {
        width: 30%;
        .profile-card {
          width: 100%;
          /* height: 250px !important; */
        }
      }
    }
  }

  @media only screen and (max-width: 640px) and (min-width: 426px) {
    .profile-cards {
      width: 90%;

      gap: 1rem;
      a {
        width: 40%;

        .profile-card {
          width: 100%;
        }
      }
    }
    .navigation {
      width: 80%;
    }
  }

  @media only screen and (max-width: 425px) {
    .profile-cards {
      width: 95%;

      gap: 1rem;
      a {
        width: 45%;
        .profile-card {
          /* height: 220px; */
          width: 100%;
        }
      }
    }
    .navigation {
      width: 90%;
    }
  }
`;
