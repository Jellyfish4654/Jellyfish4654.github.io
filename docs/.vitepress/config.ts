import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jellyfish",
  description: "Presented by FTC Team #4654 Jellyfish",
  base: '/',
  head: [
    ['link', { rel: "icon", href: "https://raw.githubusercontent.com/Jellyfish4654/juniorjellies/main/docs/assets/favicon.ico"}],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),
    logo: 'https://raw.githubusercontent.com/Jellyfish4654/juniorjellies/main/docs/assets/logo.png',
    sidebar: {
      '/docs/': sidebarDocs()
    },
  }
})

function nav() {
  return [
    { text: 'Our Team', link: '/our-team' },
    { text: 'Sponsors', link: '/sponsors' },
    { text: 'Outreach', link: '/outreach' },
    { text: 'Junior Jellies', link: 'https://jellyfish4654.github.io/juniorjellies/' },
    { text: 'Contact', link: 'mailto:bbhsrobotics4654@gmail.com' },
  ]
}

function sidebarDocs() {
  return [
    {
      text: 'Getting Started',
      collapsed: false,
      items: [
        {
          text: 'Index',
          link: '/docs/index',
        },
        {
          text: 'Jargon',
          link: '/docs/jargon',
        }
      ]
    },
    {
      text: 'Competitions',
      collapsed: false,
      items: [
        {
          text: 'Tournaments',
          link: '/docs/competitions/tournaments',
        }
      ]
    },
    {
      text: 'Engineering',
      collapsed: false,
      items: [
        {
          text: 'Electronics',
          link: '/docs/engineering/electronics',
        }
      ]
    },
    {
      text: 'Software',
      collapsed: false,
      items: [
        {
          text: 'Java Lessons',
          collapsed: false,
          items: [
            {
              text: 'Getting Started Exercises',
              link: '/docs/java/getting-started',
            },
            {
              text: 'Variables & Input',
              link: '/docs/java/variables-input',
              items: [
                {
                  text: 'Variables & Input Exercises',
                  link: '/docs/java/d1-exercises',
                }
              ]
            },
            {
              text: 'Methods Part I',
              link: '/docs/java/methods-part1',
              items: [
                {
                  text: 'Methods Part I Exercises',
                  link: '/docs/java/d2-exercises',
                }
              ]
            }
          ]
        }
      ]
    },
    {
      text: 'Useful Resources',
      collapsed: false,
      items: [
        {
          text: 'Resources',
          link: '/docs/resources',
        }
      ]
    },
  ]
}