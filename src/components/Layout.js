import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

const Layout = ({ children }) => {
    return (
        <Container>
            <GlobalStyle />
            <Nav />
            {children}
            <Footer />
        </Container>
    )
}

const GlobalStyle = createGlobalStyle`
${normalize}

body { 
  display: flex;
  flex-direction: column;
  min-height: 100%;
  font-family: 'Rubik';
  color: #111827;
}
`

const Container = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

export default Layout
