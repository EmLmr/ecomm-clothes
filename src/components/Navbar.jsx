import React from 'react';
import styled from 'styled-components';
import Search from '@mui/icons-material/Search';

const Container = styled.div`
    height: 3rem;
    font-family: 'Syne', sans-serif;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
`;

// Left side of nav.
const Left = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`;

const Language = styled.span`
    cursor: pointer;
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    border: 0.5px solid lightgray;
    margin-left: 2rem;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    font-family: 'Syne', sans-serif;
`;

// Center of nav.
const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-family: 'Yeseva One', cursive;
    font-size: 2rem;
`;

const Right = styled.div`
    flex: 1;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search..." />
                        <Search />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>Clothes.</Logo>
                </Center>
                <Right>right</Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
