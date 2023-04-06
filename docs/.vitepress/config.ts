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
    logo: 'https://raw.githubusercontent.com/Jellyfish4654/juniorjellies/main/docs/assets/logo.png'
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