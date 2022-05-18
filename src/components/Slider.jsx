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

const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                {' '}
                {/*passing props to use for styling*/}
                <ArrowBackIosNewIcon fontSize="small" />
            </Arrow>
            <Arrow direction="right">
                <ArrowForwardIosIcon fontSize="small" />
            </Arrow>
        </Container>
    );
};

export default Slider;
