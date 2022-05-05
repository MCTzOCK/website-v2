/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.SITE_URL || 'https://ben-siebert.de',
    generateRobotsTxt: true,
    exclude: [
        "/404",
    ]
}