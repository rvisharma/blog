const path = require('path')
const Image = require('@11ty/eleventy-img')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

module.exports = function (eleventyConfig) {
  eleventyConfig.addNunjucksAsyncShortcode('image', imageShortcode)

  eleventyConfig.addPlugin(syntaxHighlight)

  eleventyConfig.addPassthroughCopy({ 'src/meta': '.' })
  eleventyConfig.addPassthroughCopy({
    'src/fonts/PlusJakarta_Sans-2.5/webfonts': 'fonts',
  })

  setupMarkdownConfig(eleventyConfig)

  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  }
}

async function imageShortcode(src, alt, loading = 'lazy', sizes = '100vw') {
  let metadata = await Image(src, {
    widths: [400, 800, 1200],
    formats: ['avif', 'webp', 'png'],
    outputDir: 'dist/images',
    urlPath: '/images/',
    filenameFormat: function (id, src, width, format) {
      const extension = path.extname(src)
      const name = path.basename(src, extension)
      return `${name}-${width}w.${id}.${format}`
    },
  })

  let imageAttributes = {
    alt,
    sizes,
    loading,
    decoding: 'async',
  }

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes, {
    whitespaceMode: 'inline',
  })
}

function setupMarkdownConfig(eleventyConfig) {
  const markdownIt = require('markdown-it')

  // adds unique ids to all headings
  const markdownItAnchor = require('markdown-it-anchor')
  // capability to add attributes in markdown (id, class, etc)
  const markdownItAttrs = require('markdown-it-attrs')

  let options = { html: true, breaks: true, linkify: true }
  const markdownLib = markdownIt(options)
    .use(markdownItAnchor)
    .use(markdownItAttrs)

  // replace the default markdown-it instance
  eleventyConfig.setLibrary('md', markdownLib)
}
