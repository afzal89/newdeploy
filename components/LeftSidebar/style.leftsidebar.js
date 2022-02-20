import styled from "styled-components";
export default styled.div`
  background: #ffffff;
  box-shadow: 3px 0px 4px rgba(167, 176, 183, 0.25);
  width: 25%;
  min-height: 100vh;
  .profile-outer {
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

    height: 30%;
    flex-direction: column;
    align-items: center;
    button {
      width: 7rem;
      height: 7rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      border: none;
      margin-top: 1rem;

      .profile-image {
        width: 100%;
        height: 100%;

        border-radius: 50%;
        background-color: red;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-position: center;
        }
      }
    }
    .story-modal {
      background-color: red;
    }
    .profile-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 90%;
      span {
        letter-spacing: 0.03rem;
        font-weight: bold;
        font-size: 1.5rem;
        text-align: center;
      }
      p {
        font-size: 1.25rem;
        margin-top: 0rem;
      }
    }
  }
  .count-outer {
    width: 100%;
    display: grid;
    height: 100px;
    grid-template-columns: auto auto auto;
    .posts-outer {
      display: flex;
      justify-content: center;
      align-items: center;
      .posts-value {
        display: flex;
        flex-direction: column;
        align-items: center;
        span {
          font-weight: 700;
          font-size: 1.3rem;
        }
        p {
          margin: 0;
          font-weight: 500;
          font-size: 1.15rem;
          color: #797979;
        }
      }
    }
    .followers-outer {
      display: flex;
      justify-content: center;
      align-items: center;
      .followers-value {
        display: flex;
        flex-direction: column;
        align-items: center;
        span {
          font-weight: 700;
          font-size: 1.3rem;
        }
        p {
          margin: 0;
          font-weight: 500;
          font-size: 1.15rem;
          color: #797979;
        }
      }
    }
    .following-outer {
      display: flex;
      justify-content: center;
      align-items: center;
      .following-value {
        display: flex;
        flex-direction: column;
        align-items: center;
        span {
          font-weight: 700;
          font-size: 1.3rem;
        }
        p {
          margin: 0;
          font-weight: 500;
          font-size: 1.15rem;
          color: #797979;
        }
      }
    }
  }
  .profile-bio {
    width: 100%;
    .bio-content {
      width: 90%;
      margin: auto;
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      margin-bottom: 2rem;
      span {
        font-size: 1.25rem;
        font-weight: 450;
      }

      a {
        color: #007cee;
        font-size: 1.2rem;
        overflow: hidden;
        box-sizing: border-box;
        margin-top: 0.3rem;
        width: 100%;
      }
    }
  }
  .navigation {
    display: flex;
    flex-direction: column;
    grid-gap: 1rem;
    width: 90%;
    margin: auto;
    .stories,
    .posts {
      a {
        display: flex;
        align-items: center;
        grid-gap: 2rem;
        svg {
          font-size: 2rem;
          color: #7c7c7c;
        }
        span {
          font-weight: 700;
          font-size: 1.4rem;
          color: #797979;
        }
      }
    }
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    width: 30%;
  }
  @media only screen and (max-width: 768px) and (min-width: 640px) {
    width: 35%;
  }
  @media only screen and (max-width: 425px) {
    width: 100%;
    height: auto;
    min-height: auto;
    .profile-outer {
      height: 40%;

      .profile-image {
        width: 125px;
        height: 125px;
      }
    }
    .navigation {
      display: none;
    }
  }
`;
