module.exports = {
  siteMetadata: {
      title: `gatsby2`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, 
  {
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL: `https://strapi3-blog.herokuapp.com`,
      // Instead of contentTypes: [`article`]
      collectionTypes: [`article`],
    },
  },
  
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};