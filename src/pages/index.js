import React from 'react'
import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'
import Layout from '../components/Layout'

export const GlobalStyles = createGlobalStyle`
${normalize}
body {
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
`
const HomePage = () => {
    return (
        <Layout>
            <GlobalStyles />
            <div>HomePage</div>
        </Layout>
    )
}

export default HomePage
