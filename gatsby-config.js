const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Georgii Perepecho`,
    author: {
      name: `Georgii Perepecho`,
      summary: `A front-end developer`,
    },
    description: ``,
    siteUrl: `https://georgii.dev/`,
    openSource: [
      {
        title: 'JustValidate',
        description:
          'Modern, simple, lightweight (~5kb gzip) form validation library written in Typescript, with no dependencies (no JQuery!). Support a wide range of predefined rules, async, files, dates validation, custom error messages and styles, localization. Support writing custom rules and plugins.',
        link: 'https://github.com/horprogs/Just-validate',
        img: 'justvalidate.svg',
      },
      {
        title: 'Vue2 SSR HMR boilerplate',
        description:
          'Vue2 application boilerplate, includes server-side rendering, hot reloading, VueX state management, CSS modules, code splitting, ESLint and customizable configs.',
        link: 'https://github.com/horprogs/vue-ssr-hmr',
        img: 'vuessr.jpeg',
      },
      {
        title: 'React Query example app',
        description: 'An example of building the app using React Query.',
        link: 'https://github.com/horprogs/react-query',
        img: 'react-query.svg',
      },
    ],
    articles: [
      {
        title: 'Building The Real App With React Query',
        description:
          'I explain the most common React Query features that you need to be familiar with when creating a real-life application that is stable when testing.',
        link: 'https://www.smashingmagazine.com/2022/01/building-real-app-react-query/',
        img: 'building-real-app-react-query.jpeg',
      },
      {
        title: 'How I made it easy to develop on Vue.js with server-side rendering',
        description: 'My experience of setting SSR, HMR, VueX etc. boilerplate for Vue 2',
        link: 'https://medium.com/js-dojo/how-i-made-it-easy-to-develop-on-vue-js-with-server-side-rendering-fdeebdd7e8d8',
        img: 'vuessr.jpeg',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /img\/.*\.svg/,
        },
      },
    },

    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Montserrat:400'],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-W7Q25WB2WJ'],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-tsconfig-paths`,
      options: {
        configFile: `${__dirname}/tsconfig.json`,
        silent: false,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        src: path.join(__dirname, 'src'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: path.join(__dirname, `src`, `components`, `img`),
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: 'https://cdn.jsdelivr.net/npm/pathseg@1.2.0/pathseg.js',
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: 'https://cdn.jsdelivr.net/npm/poly-decomp@0.2.1/build/decomp.min.js',
      },
    },
  ],
}
