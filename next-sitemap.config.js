/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.siztec.com",  // change to your canonical domain
  generateRobotsTxt: false,
  sitemapSize: 5000,
  generateIndexSitemap: false,
  exclude: ["/admin/*"], // optional
};
