import styled from "styled-components";

export const Container = styled.div`
    width : 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 767px) {
        align-items: flex-start;
    }
`;

export const Wrapper = styled.div`
    max-width : 1250px;
    width : 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 767px) {
        display : none;
    }
`;

export const LogoSection = styled.div`
    min-height : 70px;
    display : flex;
    justify-content : center;
    align-items : center;
    gap : 10px;
`;

export const Logo = styled.img`
    width : 100%;
    height :70px;
    object-fit : cover;
`;

export const NavigationSection = styled.div`
    display : flex;
    gap : 35px;
    a {
        text-decoration : none;
        font : 500 16px;
    }
`;

export const LinkSection = styled.div`
    display : flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;

export const UserSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap : 30px;
    a {
        text-decoration : none;
    }
`;

export const RegesterButton = styled.button`
    width : 160px;
    height : 40px;
    font-size : 16px;
    font-weight :600;
    color : white ;
    cursor : pointer;
    background : black;
    outline : none;
    display : grid;
    place-items : center;
`;

export const LoginButton = styled(RegesterButton)`
    width : max-content;
    background : transparent;
    border : none;
    border-radius : 0;
    color : black;
`;


export const MenuWrapper = styled.div`
    display: none;
    @media(max-width: 767px) {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }
`;
