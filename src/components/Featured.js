import React from 'react'
import styled from 'styled-components'

const Featured = () => {
    return (
        <Container>
            <h2>Featured Projects</h2>
        </Container>
    )
}

const Container = styled.div`
    margin: 0 auto;
    padding: 0 1rem;
    h2 {
        font-size: 44px;
        margin-right: 30rem;
    }
`

export default Featured
