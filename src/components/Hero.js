import React from 'react'
import styled from 'styled-components'
import hero from '../assets/img/eji.gif'
import { MdArrowRightAlt } from 'react-icons/md'

const Hero = () => {
    return (
        <Container>
            <HeroCard>
                <img src={hero} alt="Hero" />
                <h2>What’s good, Adil on line 🚀</h2>
                <h3>
                    Desenvolvo ideias e ajudo a construir um mundo melhor
                    através do software.
                </h3>
                <div className="btns">
                    <a href="/">Contact</a>
                    <div className="download">
                        <button type="">Download CV</button>
                        <MdArrowRightAlt className="icon" />
                    </div>
                </div>
            </HeroCard>
        </Container>
    )
}
const Container = styled.div`
    padding: 0 1rem;
`

const HeroCard = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(99.03deg, #fbed96 -1%, #abecd6 92.31%);
    border-radius: 44px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1),
        0px 23px 30px rgba(171, 236, 214, 0.2);
    margin: 0 auto;
    margin-bottom: 5rem;
    padding: 60px 75px;
    max-width: 750px;

    img {
        border-radius: 50%;
        width: 185px;
        margin-bottom: 1.5rem;
        box-shadow: 0px 6px 46px 13px rgba(244, 255, 228, 0.5);
        user-select: none;
    }

    h2 {
        font-size: 34px;
        font-weight: 500;
        text-align: center;

        margin: 0;
        margin-bottom: 0.5rem;
    }
    h3 {
        font-size: 44px;
        font-weight: 500;
        text-align: center;

        margin: 0;
        margin-bottom: 2rem;
    }
    .btns {
        display: flex;
        flex-wrap: wrap-reverse;
        align-items: center;
    }
    a {
        font-size: 18px;
        padding: 8px 36px;
        text-decoration: none;
        color: white;
        background: #111827;
        border-radius: 32px;
        margin-right: 2rem;
    }
    .download {
        display: flex;
        align-items: center;
        position: relative;
        transition: all 100ms;
        &::after {
            content: '';
            position: absolute;
            width: 121px;
            border-bottom: 2px solid #111827;
            top: 23px;
            left: 7px;
        }
        &:hover {
            opacity: 0.8;
        }
    }
    button {
        background: transparent;
        border: none;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
    }
`

export default Hero
