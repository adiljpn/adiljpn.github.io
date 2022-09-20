import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const Navbar = styled.nav``
const Nav = () => {
    return (
        <Navbar>
            <img src="../assets/img/logo.svg" alt="logo" />
        </Navbar>
    )
}

export default Nav
