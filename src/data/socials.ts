import type { ComponentType } from 'react'
import { GithubIcon, InstagramIcon, SpotifyIcon } from '../components/icons'
import { profile } from './profile'

export type Social = {
  /** Platform name. Not displayed: it gives the link its accessible name. */
  name: string
  /** The handle shown on the button. */
  tag: string
  href: string
  icon: ComponentType<{ size?: number }>
}

/** The /socials page. Not part of the portfolio search index. */
export const socialsPage = {
  title: profile.name,
  documentTitle: `${profile.name}: Socials`,
  icon: '/images/Orange.png',
}

// SAMPLE: Instagram and Spotify have placeholder tags and point at the sites'
// home pages until the real profiles are chosen.
export const socials: Social[] = [
  { name: 'Instagram', tag: '@instagram-tag', href: 'https://www.instagram.com/', icon: InstagramIcon },
  { name: 'Spotify', tag: '@spotify-tag', href: 'https://open.spotify.com/', icon: SpotifyIcon },
  { name: 'GitHub', tag: '@alessandrofelici', href: profile.github, icon: GithubIcon },
]
