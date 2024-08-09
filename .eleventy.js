const i18n = require('eleventy-plugin-i18n');
const translations = require('./src/_data/i18n');
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/sub-page.css');
    eleventyConfig.addPassthroughCopy("./src/header.js");
    eleventyConfig.addPassthroughCopy("./src/bundle.js");
    eleventyConfig.addPassthroughCopy('./src/assets');

    eleventyConfig.addFilter("postDate", (dateObj)=>{
      return DateTime.fromJSDate(dateObj).
      toLocaleString(DateTime.DATE_MED);
  });

  // Plugins
  eleventyConfig.addPlugin(i18n, {
    translations,
    fallbackLocales: {
      '*': 'en'
    }
  });

  // TEMP demo of what could be an i18n-aware plural package?
  eleventyConfig.addFilter('pluralize', function (term, count = 1) {
    // Poorman's pluralize for now...
    return count === 1 ? term : `${term}s`;
  });

  // Browsersync
  // Redirect from root to default language root during --serve
  // Can also be handled by netlify.toml?
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware('*', (req, res) => {
          if (req.url === '/') {
            res.writeHead(302, {
              location: '/en/'
            });
            res.end();
          }
        });
      }
    }
  });

  // Configuration
  return {
    dir: {
      input: 'src'
    },
    markdownTemplateEngine: 'njk'
  };
};



