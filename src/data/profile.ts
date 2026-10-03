/**
 * YOUR IDENTITY - start here.
 *
 * Everything that says who you are lives in this file: name, handle, photo,
 * socials, email and the Home headline.
 * Replace the text, or hand this file to your AI assistant and tell it what
 * to put in each field.
 *
 * Page-specific copy (projects, services, testimonials, FAQs) lives in the
 * other files in src/data/ and at the top of each view component.
 */

import { Briefcase, Robot, MagnifyingGlass, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Joven Cueto',
  firstName: 'Joven',
  handle: '@jovencueto',
  role: 'Vice President, Blue Harbor Group',
  avatarSrc: '/photos/joven-headshot.webp',
  verifiedLabel: 'Employee of the Year 2025 - Blue Harbor Media',
  email: 'joveninabox@gmail.com',
  location: 'Taguig City, Metro Manila, PH',
  stats: [
    { value: '9 yrs', label: 'Digital marketing', Icon: Briefcase },
    { value: 'AI', label: 'Automation', Icon: Robot },
    { value: 'SEO', label: 'AEO · GEO', Icon: MagnifyingGlass },
  ],
  // The intro types this line, then flies it into the Home headline.
  displayName: { line1: 'Marketing that sells.', line2: 'Growth that lasts.' },
  hero: {
    body: 'I build growth systems - SEO, AEO, GEO, AI automation and paid media - wired straight into sales, so marketing turns into closed deals, not just leads.',
    portraitSrc: '/photos/joven-office.webp',
    portraitAlt: 'Joven Cueto at his desk',
  },
  socials: [
    { label: 'LinkedIn profile', href: 'https://www.linkedin.com/in/joven-cueto-msba-779a88167/', iconPath: '/icons/linkedin.svg' },
    { label: 'Facebook profile', href: 'https://www.facebook.com/profile.php?id=100001292387099', iconPath: '/icons/facebook.svg' },
    { label: 'TikTok profile', href: 'https://www.tiktok.com/@joven.cueto', iconPath: '/icons/tiktok.svg' },
  ],
}
