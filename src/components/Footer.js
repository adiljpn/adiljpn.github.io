import React from 'react'
import { FaTelegram, FaDiscord } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <article>
                <h2>Have any ides?</h2>
                <h3>Im on line!</h3>
                <a href="mailto:adilv022@gmail.com">adilv022@gmail.com</a>
                <div>
                    <FaTelegram />
                    <FaDiscord />
                </div>
            </article>
        </footer>
    )
}

export default Footer
