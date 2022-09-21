import React from 'react'
import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'
import Layout from '../components/Layout'

const GlobalStyles = createGlobalStyle`
${normalize}
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap');

body { 
  display: flex;
  flex-direction: column;
  min-height: 100%;
  font-family: 'Rubik', sans-serif;
}
`
const HomePage = () => {
    return (
        <Layout>
            <GlobalStyles />
            <h1>HomePage</h1>
        </Layout>
    )
}

export default HomePage
