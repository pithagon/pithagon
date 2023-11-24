/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://pithagon.com",
  changefreq: "daily",
  generateRobotsTxt: true, // (optional)
};
