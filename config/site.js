module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to ecotourismbelize.com/portfolio your pathPrefix should be "portfolio"
  title: 'EcoTourism Belize', // Navigation and Site Title
  titleAlt: 'EcoTourism Belize', // Title for JSONLD
  description: 'EcoTourism Belize',
  url: 'https://ecotourismbelize.com', // Domain of your site. No trailing slash!
  siteUrl: 'https://ecotourismbelize.com', // url + pathPrefix
  blogUri: '/blog',
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'src/assets/images/logo.png', // Used for SEO
  banner: 'src/assets/images/banner.png',
  siteGATrackingID: 'UA-70450292-16',
  // JSONLD / Manifest
  favicon: 'src/assets/images/favicon.png', // Used for manifest favicon generation
  shortName: 'etb', // shortname for manifest. MUST be shorter than 12 characters
  author: 'David Sapp', // Author for schemaORGJSONLD
  themeColor: '#ff6363',
  backgroundColor: '#ff6363',
  twitter: '', // Twitter Username
  // EXTRA
  hoursOfOperation: 'M-F: 9am - 5pm',
  address: 'Ogaldez Street, Punta Gorda Town, Toledo District, Belize',
  phone: '(+501)-722-0108',
  email: 'info@ecotourismbelize.com',
  // FOOTER
  company: 'EcoTourism Belize',
};
