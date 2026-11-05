import type { ComponentType } from 'react'
import {
  BrawlStarsIcon,
  DiscordIcon,
  GithubIcon,
  GoodreadsIcon,
  InstagramIcon,
  LetterboxdIcon,
  LinkedinIcon,
  SpotifyIcon,
  StravaIcon,
  SubstackIcon,
  TiktokIcon,
} from '../components/icons'
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

export const socials: Social[] = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/alessandrofeliciii/',
    icon: InstagramIcon,
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@alessandrofelici605',
    icon: TiktokIcon,
  },
  {
    name: 'Spotify',
    href: 'https://open.spotify.com/user/31ep2x5rs6bsp5gkma33kkukckai',
    icon: SpotifyIcon,
  },
  { name: 'GitHub', href: profile.github, icon: GithubIcon },
  {
    name: 'Strava',
    href: 'https://www.strava.com/athletes/122357926',
    icon: StravaIcon,
  },
  {
    name: 'Substack',
    href: 'https://substack.com/@alessandrofelici',
    icon: SubstackIcon,
  },
  {
    name: 'Letterboxd',
    href: 'https://letterboxd.com/alessandrofel/',
    icon: LetterboxdIcon,
  },
  {
    name: 'Goodreads',
    href: 'https://www.goodreads.com/user/show/206211859-alessandro-felici',
    icon: GoodreadsIcon,
  },
  { name: 'LinkedIn', href: profile.linkedin, icon: LinkedinIcon },
  {
    name: 'Discord',
    href: 'https://discord.com/users/402245812824047616',
    icon: DiscordIcon,
  },
  {
    name: 'Brawl Stars',
    href: 'https://link.brawlstars.com/invite/friend/en/?tag=829YGVC89',
    icon: BrawlStarsIcon,
  },
]
