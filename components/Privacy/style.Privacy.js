import styled from "styled-components";
export default styled.div`
    .container{
        margin-top: 60px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: auto;
    }
    .Main{
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
    }

    .contain{
        width: 85%;
    }

    .Main h5{
        font-size: 24px;
        margin-bottom: -5px;
        text-align: center;
    }
    .Main p{
        font-size: 20px;
    }
    @media only screen and (max-width: 768px) {
        .Main h5{
        font-size: 22px;
    }
    .Main p{
        font-size: 20px;
    }
    }

  @media only screen and (max-width: 640px) and (min-width: 426px) {
    .Main h5{
        font-size: 22px;
    }
    .Main p{
        font-size: 20px;
    }
  }
  @media only screen and (max-width: 425px) {
    .Main h5{
        font-size: 20px;
        margin-bottom: -5px;
    }
    .Main p{
        font-size: 16px;
    }
  }
`;