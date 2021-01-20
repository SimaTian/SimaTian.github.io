module.exports = {
  title: 'Optimization Playground',
  tagline: 'Can it go faster?',
  url: 'https://SimaTian.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SimaTian', // Usually your GitHub org/user name.
  projectName: 'SimaTian.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Optimization Playground',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [

        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Content',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/SimaTian/optimization-playground',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/optimization',
            }
          ],
        },
        {
          title: 'Github',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/SimaTian/optimization-playground',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tomas Bartonek, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.

        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
