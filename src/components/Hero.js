import React from 'react'
import styled from 'styled-components'
import hero from '../assets/img/hero.svg'
import { MdArrowRightAlt } from 'react-icons/md'

const Hero = () => {
    return (
        <HeroCard>
            <img src={hero} alt="Hero" />
            <h2>What’s good, Adil on line 🚀</h2>
            <h3>
                Desenvolvo ideias e ajudo a construir um mundo melhor através do
                software. 
            </h3>
            <div className="btns">
                <a href="/contact">Contact</a>
                <div className="download">
                    <button type="">Download CV</button>
                    <MdArrowRightAlt className="icon" />
                </div>
            </div>
        </HeroCard>
    )
}

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
    padding: 40px;
    width: 750px;
    img {
        width: 184px;
    }

    h2 {
        font-size: 32px;
        font-weight: 500;
        margin: 0;
        margin-bottom: 0.5rem;
    }
    h3 {
        font-size: 40px;
        font-weight: 500;
        margin: 0;
        text-align: center;
        margin-bottom: 2rem;
    }
    .btns {
        display: flex;
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
        cursor: pointer;
        font-weight: 600;
    }
`

export default Hero
