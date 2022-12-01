import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: grid;
    place-items: center;
    margin-top: 50px;
    @media (max-width: 767px){
        width : 100%
    }
`;

export const Wrapper = styled.div`
    max-width: 760px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    @media (max-width: 767px) {
        flex-wrap: wrap;
    }
`;

export const LeftSection = styled.div`
    display:  flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    width: 100%;
    height : 350px;
    object-fit: cover;
`;

export const RightSection = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap : 20px;
`;

export const DetailsWrap = styled.div`
    @media (max-width : 767px) {
        text-align: center;
    }
`;

export const CompanySection = styled.div`
    display: flex;
    gap: 20px;
    @media (max-width: 767px ) {
        align-items: center;
        flex-wrap: wrap;
    }
`;

export const CompanyImage = styled.img`
    width: 150px;
    height: 60px;
    @media (max-width: 767px) {
        width : 100px;
        height : 50px;
    }
`;

export const Bold = styled.h1`
    font-size: 35;
    font-weight: bold;
    margin: 0;
`;

export const Desc = styled.p`
    font-size: 16px;
    max-width: 500px;
`;

export const InputSection = styled.div`
    display : flex;
    align-items: center;
    @media (max-width : 767px) {
        margin: 0 auto;
        justify-content: center;
    }
`;

export const InputField = styled.input`
    height : 40px;
    border :1px solid black;
    outline : none;
    box-sizing: border-box;
    padding: 10px;
`;

export const GetStartedButton = styled.button`
    width: 100px;
    height : 40px;
    background-color: black;
    outline: none;
    color: white;
`;

export const Heading = styled.h1`
    font-size: 30px;
    font-weight: 500;
    line-height : 1.2;
    margin : 0;
`;























