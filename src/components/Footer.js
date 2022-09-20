import React from 'react'
import { FaTelegram, FaDiscord } from 'react-icons/fa'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const Foot = styled.footer`
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #111827;
        color: white;
        border-radius: 48px 48px 0px 0px;
        padding: 80px 24px 28px;
    }
    section {
        display: flex;
    }
    article {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-right: 64px;
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
    }
    h2 {
        font-size: 92px;
        font-weight: 500;
        margin: 0;
    }
    h3 {
        font-size: 28px;
        font-weight: 400;
        margin: 0;
    }
    .mail {
        font-size: 28px;
        text-decoration: none;
        color: white;
        border-bottom: 2px solid #ffffff;
    }
    a {
        text-decoration: none;
        color: purple;
    }
`

const Footer = () => {
    return (
        <Foot>
            <div className="wrapper">
                <section>
                    <article>
                        <h2>Have any ideas?</h2>
                        <h3>Im on line!</h3>
                        <a className="mail" href="mailto:adilv022@gmail.com">
                            adilv022@gmail.com
                        </a>
                        <div>
                            <FaTelegram />
                            <FaDiscord />
                        </div>
                    </article>
                    <StaticImage
                        src="../assets/img/footer_img.png"
                        alt="Footer Image"
                    />
                </section>
                <p>
                    <span>Developed by Adil Satiev.</span> Built with{' '}
                    <a href="www.gatsby.com">Gatsby</a>
                </p>
            </div>
        </Foot>
    )
}

export default Footer
