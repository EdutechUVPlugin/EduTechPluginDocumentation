const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Moodle Plugin API',
  tagline: 'Implementation guide for EduTech Moodle Repository Plugin',
  url: 'http://documentation.edutech.api',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/mlogo.jpeg',
  organizationName: 'EduTech', // Usually your GitHub org/user name.
  projectName: 'EduTech Guides', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'EduTech',
        logo: {
          alt: 'Logo Moodle',
          src: 'img/mlogo.jpeg',
        },
        items: [
          {
            to: 'docs/intro',
            docId: 'intro',
            position: 'left',
            label: 'API Guide',
          },
          {
            href: 'https://repositorio.edutech-project.org/api-view',
            label: 'Swagger',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Docusaurus',
                to: 'docs/intro',
              },
            ],
          },
          {
            title: 'EduTech Links',
            items: [
              {
                label: 'EduTech',
                href: 'https://repositorio.edutech-project.org/'
              },
              {
                label: 'Swagger',
                href: 'https://repositorio.edutech-project.org/api-view',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Developed by Universidad Veracruzana.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'es'],
      localeConfigs: {
        en: {
          label: 'English',
          direction: 'ltr',
        },
        es: {
          label: 'Español',
          direction: 'ltr',
        },
      },
    },
});
