export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'Nick Hermann',
  DESCRIPTION:
    'This blog is about Hyrox and training planning in the functional fitness area.',
  EMAIL: 'nickhrm2308@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 5,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://nickhrm.de',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/authors', label: 'authors' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/nickhrm', label: 'GitHub' },
  { href: 'https://www.strava.com/athletes/121573453', label: 'Strava' },
  //{ href: 'jason@enscribe.dev', label: 'Email' },
  //{ href: '/rss.xml', label: 'RSS' },
]
 