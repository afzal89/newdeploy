import styled from "styled-components";
export default styled.div`
  .story-icon {
    width: 9rem;
    height: 9rem;

    display: inline-block;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .story-pic {
      width: 7rem;
      height: 7rem;
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
    .story-time {
      margin-top: 0.2rem;
      width: 7rem;
      text-align: center;
    }
  }
`;
