import React from 'react'
import Featured from '../components/Featured'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

const HomePage = () => {
    return (
        <Layout>
            <Hero />
            <Featured />
        </Layout>
    )
}

export default HomePage
