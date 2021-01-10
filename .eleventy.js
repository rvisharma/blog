module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");

  // this works because Eleventy also installs markdown-it
  const markdownIt = require("markdown-it");

  // adds unique ids to all headings
  const markdownItAnchor = require("markdown-it-anchor");
  // capability to add attributes in markdown (id, class, etc)
  const markdownItAttrs = require("markdown-it-attrs");
  let options = { html: true, breaks: true, linkify: true };
  let markdownLib = markdownIt(options)
    .use(markdownItAnchor)
    .use(markdownItAttrs);

    // replace the default markdown-it instance
  eleventyConfig.setLibrary("md", markdownLib);

  return {
    dir: { input: "src", output: "dist", data: "_data" },
    passthroughFileCopy: true,
    templateFormats: ["njk", "md", "css", "html", "yml"],
    htmlTemplateEngine: "njk",
  };
}
