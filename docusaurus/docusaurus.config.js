// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fleet Command Academy',
  tagline: 'Star Trek: Fleet Command Community Sourced Knowledge Base',
  favicon: 'img/icon.svg',

  // Set the production url of your site here
  url: 'https://fleetcommand.academy',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fleetcommand-academy', // Usually your GitHub org/user name.
  projectName: 'web-frontend', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:'https://github.com/fleetcommand-academy/web-frontend/docusaurus/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:'https://github.com/fleetcommand-academy/web-frontend/docusaurus/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id:'contribute',
        path: 'contribute',
        routeBasePath: '/contribute',
        editUrl: 'https://github.com/fleetcommand-academy/web-frontend/docusaurus',
        sidebarPath: require.resolve('./sidebarsContribute.js'),
      }
    ],
    './widgetbot',
  ],
  
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        indexDocs: true,
        indexPages: true,
        indexBlog: true,
        docsRouteBasePath: "/",
        blogRouteBasePath: "/",
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        hashed: true,
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'announcement',
        content: 
          'Help grow the knowledge shared on this platform! Learn more about <a href="/contribute" target="_blank">contributing</a>!',
        backgroundColor: "#c8aa36",
        textColor: "ffffff",
        isCloseable: false,
      },
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Fleet Command Academy',
        logo: {
          alt: 'Fleet Command Academy Logo',
          src: 'img/icon.svg',
        },
        items: [
          {
            to: 'Game Mechanics',
            position: 'left',
            label: 'Game Mechanics',
            activeBasePath: 'Game Mechanics',
          },
          {
            to: 'Guides',
            position: 'left',
            label: 'Guides',
            activeBasePath: 'Guides',
          },
          {
            to: 'Resources',
            position: 'left',
            label: 'Resources',
            activeBasePath: 'Resources',
          },
          {
            to: 'contribute',
            position: 'right',
            label: 'Contribute',
            activeBasePath: 'contribute'
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Navigation',
            items: [
              {
                label: 'Home',
                to: '/'
              },
              {
                label: 'Game Mechanics',
                to: 'reference/Game Mechanics',
              },
              {
                label: 'Guides',
                to: 'reference/Guides',
              },
              {
                label: 'Resources',
                to: 'reference/Resources',
              },
              {
                label: 'Blog',
                to: '/blog'
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/fleetcommand-academy/web-frontend',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/bZb66fQJ99',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Contribute',
                to: '/contribute',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fleet Command Academy. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
