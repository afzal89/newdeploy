import styled from "styled-components";
export default styled.div`
  min-height: calc(100vh - 97px);
  margin-bottom: 4rem;
  margin-top: 60px;
  .no-result {
    text-align: center;
  }
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
      a:hover,
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
  .hashtags {
    width: 80%;

    justify-content: center;
    display: flex;
    flex-wrap: wrap;

    margin: auto;
    margin-top: 2rem;
    gap: 20px;
  }
  @media only screen and (max-width: 768px) and (min-width: 426px) {
    .hashtags {
      width: 90%;
    }
    .navigation {
      width: 80%;
    }
  }
  @media only screen and (max-width: 425px) {
    .hashtags {
      width: 97%;
    }
    .navigation {
      width: 90%;
    }
  }
`;
