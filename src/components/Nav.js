import React from 'react'
import styled from 'styled-components'
import logo from '../assets/img/logo.svg'

const Navbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Nav = () => {
    return (
        <Navbar>
            <img src={logo} alt="logo" />
        </Navbar>
    )
}

export default Nav
