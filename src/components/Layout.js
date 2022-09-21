import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import styled from 'styled-components'

const Container = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const Layout = ({ children }) => {
    return (
        <Container>
            <Nav />
            {children}
            <Footer />
        </Container>
    )
}

export default Layout
