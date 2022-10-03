import styled from "styled-components";

export const TextStyled = styled.p`
    &.header {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        color: #111111;
        line-height: 1.5rem;
        margin-block: 0;

        @media (max-width: 768px) {
            font-size: 0.7rem;
        }
    }

    &.sucess {
        font-family: 'Nunito', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        color: #000000;
        line-height: 1.125rem;
        margin-block: 0;
    }

    &.birthday {
        font-family: 'Nunito', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        color: #767676;
        line-height: 0.5rem;
        margin-block: 0;
        margin-bottom: 1rem;
    }
   
`;