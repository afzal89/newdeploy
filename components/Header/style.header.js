import styled from "styled-components";
export default styled.div`
  .header {
    height: 50px;
    width: 100%;
    background-color: white;
    box-shadow: 0px 5px 8px #cbdce8;
    border-radius: 3px;
    display: flex;
    position: fixed;
    top: 0;
    z-index: 999;
    .logo-outer {
      position: absolute;
      left: 1rem;
      /* top: 7px; */
      height: 50px;
      display: flex;
      align-items: center;
      a {
        max-height: 35px;
        height: 100%;
        display: flex;
        align-items: center;
        grid-gap: 0.5rem;
        .logo {
          height: 100%;
          img {
            background-position: center;
            /* object-fit: cover; */
            /* width: 100%; */
            height: 100%;
          }
        }
        span {
          font-weight: 700;
          color: black;
        }
      }
    }
    .container {
      width: 98%;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      grid-template-columns: 40% 60%;

      .search-outer {
        max-width: 380px;
        width: 90%;

        height: 35px;

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
              border-top-left-radius: 10px;
              border-bottom-left-radius: 10px;
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
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
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
    }
    .menu-outer {
      a {
        svg {
          font-size: 1.5rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .search-outer {
      width: 200px !important;
    }
  }

  @media only screen and (max-width: 640px) and (min-width: 426px) {
    .search-outer {
      width: 250px !important;
    }
    .header {
      .container {
        justify-content: flex-end;
      }
    }
  }
  @media only screen and (max-width: 425px) {
    .search-outer {
      width: 200px !important;
    }
    .header {
      .container {
        justify-content: flex-end;
      }
    }
  }
`;
