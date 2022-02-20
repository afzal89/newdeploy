import styled from "styled-components";

export default styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  background: linear-gradient(
    18deg,
    #dee4e8 0%,
    rgb(236 229 228) 25%,
    rgb(239 237 237) 51%,
    #bfdaf3 75%,
    #d5e0ea 100%
  );
  .react-responsive-modal-modal {
    margin: 0 !important;
    padding: 0 !important;
    div {
      width: 100%;
      height: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 60%;
    justify-content: center;
    align-items: center;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      background-position: center;
    }
  }
`;
