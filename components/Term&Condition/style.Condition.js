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
        background: #fff;

       /* -webkit-box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.75);; */
    }

    .contain{
        width: 85%;
    }


    .Main h5{
        /* width: 80%; */
        font-size: 24px;
        margin-bottom: -5px;
        text-align: center;
    }
    .Main p{
        font-size: 20px;
        /* width: 80%; */
        /* text-align: center; */
    }

    .imp{
        font-size: 14px;
        font-weight: normal;
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