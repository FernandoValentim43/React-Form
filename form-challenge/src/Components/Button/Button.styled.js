import styled from 'styled-components';

const DivButton = styled.div`
    button{
        cursor: pointer;
    }
    .deletButton{
        background: none;
        border: none;
        color: white;
        font-size: 11px;
        padding: 0px;
    }
    .length0{
        opacity: 0;
    }
    .length1, .length2,.length3, .length4,.length5{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 25px;
        height: 2.5rem;
        width: 187px;
        background-color: #074EE8;
        color: white;
        font-size: 1rem;
        border: none;
        border-radius: 4px;
        gap: 7px;
    }
    .finish{
        img{
            width: 13px;
            margin: 0;
        }
        background-color: #074EE8;
        color: white;
        border: none;
        border-radius: 0.3125rem;
        width: 5.68rem;
        height: 2.5rem;
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding-left: 0.75rem;
    }
    .next{
        img{
            width: 12px;
            margin: 0;
        }
        display: flex;
        background-color: #074EE8;
        color: white;
        border: none;
        border-radius: 0.3125rem;
        width: 5.18rem;
        height: 2.5rem;
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.7rem;
        padding-right: 1.2rem;
    }
    .more{
        img{
            width: 12px;
            margin: 0;
        }
        display: flex;
        background-color: #074EE8;
        color: white;
        border: none;
        border-radius: 0.3125rem;
        width: 6.81rem;
        height: 2.5rem;
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.625rem;
        padding: 0 0.75rem;
    }
`;

export {DivButton}