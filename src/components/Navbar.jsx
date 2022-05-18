import React from 'react';
import styled from 'styled-components';

import Search from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';

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

// Right side of nav.
const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
`;

const MenuItem = styled.div`
    margin-left: 1.5rem;
    cursor: pointer;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search..." />
                        <Search color="action" fontSize="small" />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>Clothes.</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>LOG IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
