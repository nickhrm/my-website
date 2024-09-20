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
  TITLE: 'astro-erudite',
  DESCRIPTION:
    'This blog is about Hyrox and training planning in the functional fitness area.',
  EMAIL: 'nickhrm2308@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 5,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://astro-erudite.vercel.app',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/authors', label: 'authors' },
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/nickhrm', label: 'GitHub' },
  //{ href: 'https://twitter.com/enscry', label: 'Twitter' },
  //{ href: 'jason@enscribe.dev', label: 'Email' },
  //{ href: '/rss.xml', label: 'RSS' },
]
