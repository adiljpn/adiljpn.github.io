import React from 'react'
import { FaTelegram, FaDiscord, FaGithubSquare } from 'react-icons/fa'
import styled from 'styled-components'

const Foot = styled.footer`
    margin-top: auto;
    display: flex;
    background: #111827;
    color: white;
    padding: 5px 2rem;
    font-size: 18px;
    ul {
        display: flex;
        list-style: none;
    }
    .links {
        color: white;
        margin-right: 1rem;
        width: 65px;
        height: 65px;
    }

    .gatsby {
        margin-left: auto;
    }
    .gatsby-link {
        text-decoration: none;
        color: #59238f;
    }
`

const Footer = () => {
    return (
        <Foot>
            <p>&copy;{new Date().getFullYear()} Adil Satiev</p>
            <ul>
                <li>
                    <a href="www.ya.ru" className="links">
                        <FaTelegram className="icons" />
                    </a>
                </li>
                <li>
                    <a href="www.ya.ru" className="links">
                        <FaDiscord className="icons" />
                    </a>
                </li>
                <li>
                    <a href="www.ya.ru" className="links">
                        <FaGithubSquare className="icons" />
                    </a>
                </li>
            </ul>
            <p className="gatsby">
                <span>Powered by</span>{' '}
                <a className="gatsby-link" href="www.gatsby.com">
                    Gatsby
                </a>
            </p>
        </Foot>
    )
}

export default Footer
