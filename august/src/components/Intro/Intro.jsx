import React from "react";
import { Container, Wrapper, LeftSection, Image,RightSection,DetailsWrap, Heading, Bold, Desc, InputSection, InputField, GetStartedButton, CompanySection, CompanyImage } from "./Intro.styles";
const Intro = () => {
    return (
        <Container>
            <Wrapper>
                <LeftSection>
                    <Image src="https://previews.123rf.com/images/kitaec/kitaec1409/kitaec140900098/31574415-girl-holding-touch-pad-with-chart.jpg" />
                </LeftSection>
                <RightSection>
                    <DetailsWrap>
                        <Heading>
                            <Bold>Smart Banking</Bold>For the Financial<Bold>Freedom</Bold>
                        </Heading>
                        <Desc>we will calculate the <b>credit limit</b> individually for you without interviews with credit brokers</Desc>
                        <InputSection>
                            <InputField type = "text" placeholder="Enter your Email"></InputField>
                            <GetStartedButton>Get Started</GetStartedButton>
                        </InputSection>
                    </DetailsWrap>
                    <CompanySection>
                        <CompanyImage src="./assets/apple.png"/>
                        <CompanyImage src="./assets/PayPal.png"/>
                        <CompanyImage src="./assets/visa.png"/>
                    </CompanySection>
                </RightSection>
            </Wrapper>
        </Container>
    )
};

export default Intro