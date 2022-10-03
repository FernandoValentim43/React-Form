import styled from "styled-components";

export const CardStyled = styled.section`
  h5 {
    display: flex;
    width: 100%;
    padding-left: 3rem;
    margin-top: 2.8rem;
    margin-bottom: 1.3rem;

    @media (max-width: 375px) {
      font-size: 1rem;
      padding-left: 1rem ;
    }

    @media (max-width: 375px) {
      margin-top: 1.8rem;
    }
  }

  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  width: 38.563rem;
  height: 44rem;
  margin: 5rem auto 0 auto;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 0;     
  }
   
  @media (max-width: 375px) {
    height: 100vh;
  }
`;
