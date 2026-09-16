import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Herwin Ochoa',
  tagline: 'I’m a software engineer with over a decade of experience in web development encompassing frontend, backend and cloud infrastructure.',
  favicon: 'img/favicon.ico',

  headTags: [
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
      },
    },
  ],

  // Set the production url of your site here
  url: 'https://herwindo.com',
  // Set the /<baseUrl>/ pathname under which your site is served.
  // A custom domain serves from the root, so this stays '/'.
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'winwun', // GitHub org/user name.
  projectName: 'herwindo-website', // Repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Rspack + SWC + LightningCSS build pipeline. Stable since 3.10, and the
  // default in v4.
  future: {
    faster: true,
    v4: {
      // Required by future.faster.ssgWorkerThreads. Safe here: no plugin on
      // this site uses the legacy postBuild({head}) API.
      removeLegacyPostBuildHeadAttribute: true,
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          // Private pages, kept off the sitemap. They still build and remain
          // reachable by direct link; /valentine also sends a noindex header tag.
          ignorePatterns: ['/valentine'],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'herwindo',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'About Me',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Online Resume, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
