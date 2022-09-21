module.exports = {
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                preconnect: [
                    `https://fonts.googleapis.com`,
                    `https://fonts.gstatic.com`,
                ],
                web: [
                    {
                        name: `Rubik`,
                        file: `https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap`,
                    },
                ],
            },
        },
    ],
}
