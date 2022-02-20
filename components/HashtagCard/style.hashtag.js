import styled from "styled-components";
export default styled.div`
  .hashtag {
    background: #fffbfb;
    box-shadow: 0px 4px 8px rgba(90, 121, 144, 0.25);
    border-radius: 10px;
    height: 5rem;
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
        color: #909090;
      }
    }
  }
`;
