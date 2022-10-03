import styled from "styled-components";

export const SocialForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 32.2rem;
  height: 36.8rem;
  gap: 3.56rem;

  @media (max-width: 768px) {
    width: 90vw;
    height: 80vh;
    gap: 2.5rem;
  }
`;

export const DivBtn = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 1rem;
`;