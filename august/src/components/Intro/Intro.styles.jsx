import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    margin-top: 50px;
`;

export const Wrapper = styled.div`
    max-width: 1100px;
    display: flex;
    align-items: center;
    gap: 50px;
`;

export const LeftSection = styled.div`
    flex: 1;
    /* min-height: 30px; */
`;

export const Image = styled.img`
    width: 100%;
    height : 350px;
    object-fit: cover;
`;

export const RightSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap : 20px;
`;

export const DetailsWrap = styled.div`
`;

export const CompanySection = styled.div`
    display: flex;
    gap: 20px;
`;

export const CompanyImage = styled.img`
    width: 150px;
    height: 60px;
`;

export const Bold = styled.h1`
    font-size: 35;
    font-weight: bold;
    margin: 0;
`;

export const Desc = styled.p`
    font-size: 16px;
`;

export const InputSection = styled.div`
    display : flex;
    align-items: center;
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























