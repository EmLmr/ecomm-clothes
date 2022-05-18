import React from 'react';
import styled from 'styled-components';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: beige;
    position: relative;
`;

const Arrow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.5;
    position: absolute;
    //Center arrow vertically:
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === 'left' && '1rem'}; // set arrows to each side
    right: ${(props) => props.direction === 'right' && '1rem'}; // set arrows to each side
    margin: auto;
`;

const Wrapper = styled.div`
    height: 100%;
`;

// Slider content
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`;

const Image = styled.img`
    height: 80%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 4rem;
`;

const Title = styled.h1`
    /* font-size: 70px; */
    font-size: 4rem;
`;
const Description = styled.h2`
    margin: 4rem 0;
    letter-spacing: 2px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 1.5rem;
    background-color: transparent;
    cursor: pointer;
`;

const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                {' '}
                {/*passing props to use for styling*/}
                <ArrowBackIosNewIcon fontSize="small" />
            </Arrow>

            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Image alt="Some image" />
                    </ImgContainer>

                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Description>Don't compromise on style! Get 30% off on new arrivals.</Description>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>

            <Arrow direction="right">
                <ArrowForwardIosIcon fontSize="small" />
            </Arrow>
        </Container>
    );
};

export default Slider;
