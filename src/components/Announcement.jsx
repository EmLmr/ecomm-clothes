import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e78b3b;
    font-family: 'Syne', sans-serif;

    color: white;
    height: 2.5rem;
`;

const Wrapper = styled.div`
    padding: 0.5rem;
`;

const Announcement = () => {
    return (
        <Container>
            <Wrapper>Super deal! Free shipping on orders over $50</Wrapper>
        </Container>
    );
};

export default Announcement;
