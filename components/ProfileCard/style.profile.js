import styled from "styled-components";
export default styled.div`
  width: 85%;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  display: grid;
  grid-template-columns: 16.66% 16.66% 16.66% 16.66% 16.66% 16.66%;
  grid-gap: 2%;
  margin: auto;
  .profile-card {
    background: #ffffff;
    box-shadow: 2px 5px 9px rgba(0, 0, 0, 0.16);
    border-radius: 30px;
    display: flex;

    align-items: center;
    flex-direction: column;
    .profile-avatar {
      width: 55%;

      margin-top: 2.6rem;
      img {
        object-fit: cover;
        background-position: center;
        width: 100%;
      }
    }
    .profile-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 1.5rem;
      span {
        letter-spacing: 0.03rem;
        font-weight: bold;
        font-size: 1.75rem;
      }
      p {
        font-size: 1.25rem;
        margin-top: 0.1rem;
      }
    }
  }
`;
