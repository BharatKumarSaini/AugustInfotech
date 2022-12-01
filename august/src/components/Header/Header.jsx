import React from "react";
import Menu from "../Menu"
import { Container, Wrapper, LogoSection, Logo, NavigationSection, LinkSection, UserSection, LoginButton, RegesterButton, MenuWrapper } from "./Header.styles";

const Header = () => {
    return (
        <Container>
            <Wrapper>
                <LogoSection>
                    <Logo src = "./assets/test.jpg" alt = "logo" />
                </LogoSection>
                <NavigationSection>
                    <LinkSection>Services</LinkSection>/<LinkSection>About Us</LinkSection>/<LinkSection>Pricing</LinkSection>/<LinkSection>News</LinkSection>
                </NavigationSection>
                <UserSection>
                    <LoginButton>Log In</LoginButton>
                    <RegesterButton>Sign Up</RegesterButton>
                </UserSection>
            </Wrapper>
            <MenuWrapper>
                <Menu/>
            </MenuWrapper>
        </Container>
    )
};

export default Header