import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Junior Jellies",
  description: "Presented by FTC Team #4654 Jellyfish",
  base: '/juniorjellies/',
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
    { text: 'Junior Jellies', link: '/juniorjellies', activeMatch: '/juniorjellies/' },
    { text: 'Contact', link: 'mailto:bbhsrobotics4654@gmail.com' },
  ]
}