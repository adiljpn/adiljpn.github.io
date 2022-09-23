import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import logo from '../assets/img/logo.svg'

const Nav = () => {
    return (
        <Navbar>
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
        </Navbar>
    )
}

const Navbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1.7rem;
    margin-bottom: 1.5rem;
    img {
        width: 120px;
    }
`

export default Nav
