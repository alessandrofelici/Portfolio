import type { ComponentType } from 'react'
import { GithubIcon, InstagramIcon, SpotifyIcon } from '../components/icons'
import { profile } from './profile'

export type Social = {
  name: string
  href: string
  icon: ComponentType<{ size?: number }>
}

/** The /socials page. Not part of the portfolio search index. */
export const socialsPage = {
  title: profile.name,
  documentTitle: `${profile.name}: Socials`,
  icon: '/images/Orange.png',
}

// SAMPLE: Instagram and Spotify point at the sites' home pages until the real
// profiles are chosen.
export const socials: Social[] = [
  { name: 'Instagram', href: 'https://www.instagram.com/', icon: InstagramIcon },
  { name: 'Spotify', href: 'https://open.spotify.com/', icon: SpotifyIcon },
  { name: 'GitHub', href: profile.github, icon: GithubIcon },
]
