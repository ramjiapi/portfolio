// All copy, figures and destinations for the site live here. Every number is
// supplied by Ramji and labelled as reported — nothing is inferred.

export interface Platform {
  name: string
  handle: string
  mark: string
  value: string
  suffix?: string
  rankLabel: string
  blurb: string
  href: string
}

export interface Certification {
  code: string
  name: string
  issuer: string
  image: string
  alt: string
  note: string
}

const standoffHref = 'https://standoff365.com/en-US/profile/ramjiapi/'
const yeswehackHref = 'https://yeswehack.com/hunters/aliso#latest-hacktivity'
const intigritiHref = 'https://app.intigriti.com/researcher/profile/ramjiapi049'
const linkedinHref = 'https://www.linkedin.com/in/ramjiapi/'
const githubHref = 'https://github.com/ramjiapi'

export const site = {
  name: 'Ramji Singh',
  handle: 'ramjiapi',
  jobTitle: 'Cybersecurity Researcher',
  headline: 'Cybersecurity Researcher | Ethical Hacker | Bug Bounty Hunter',
  eyebrow: 'Cybersecurity researcher · Ethical hacker · Bug bounty hunter',
  lead: 'Breaking systems to make them stronger.',
  intro:
    "I'm Ramji Singh, a cybersecurity researcher and ethical hacker focused on discovering vulnerabilities, strengthening digital security and making the internet safer.",
  description:
    'Ramji Singh (ramjiapi) — cybersecurity researcher, ethical hacker and bug bounty hunter with 45+ valid security bugs reported and a reported 17th worldwide ranking on Standoff 365.',
  email: 'ramjiapi049@gmail.com',
  linkedin: linkedinHref,
  github: githubHref,
  photo: './images/ramji-singh.webp',
  photoAlt: 'Portrait of Ramji Singh, cybersecurity researcher and bug bounty hunter',
  keywords: [
    'Vulnerability discovery',
    'Web application security',
    'Ethical hacking',
    'Bug bounty hunting',
    'Security analysis',
    'Capture The Flag (CTF) competitions',
  ],
}

export const nav = [
  { id: 'rankings', label: 'rankings' },
  { id: 'platforms', label: 'platforms' },
  { id: 'credentials', label: 'credentials' },
  { id: 'whoami', label: 'about' },
  { id: 'contact', label: 'contact' },
] as const

export const stats = [
  {
    value: '45+',
    label: 'Valid bugs reported',
    sub: 'Across the supplied platforms',
    href: '#platforms',
    external: false,
  },
  {
    value: '17th',
    label: 'Standoff 365',
    sub: 'Reported worldwide position',
    href: standoffHref,
    external: true,
  },
  {
    value: '3100',
    label: 'YesWeHack',
    sub: 'Reported ranking',
    href: yeswehackHref,
    external: true,
  },
  {
    value: '3300',
    label: 'Intigriti',
    sub: 'Reported ranking',
    href: intigritiHref,
    external: true,
  },
]

export const platforms: Platform[] = [
  {
    name: 'Standoff 365',
    handle: 'ramjiapi',
    mark: 'S365',
    value: '17th',
    suffix: 'worldwide',
    rankLabel: 'Reported ranking',
    blurb:
      'Reported 17th position worldwide on Standoff 365, the platform where the bulk of the reporting history lives.',
    href: standoffHref,
  },
  {
    name: 'YesWeHack',
    handle: 'aliso',
    mark: 'YWH',
    value: '3100',
    rankLabel: 'Reported ranking',
    blurb: 'Bug bounty researcher on YesWeHack with a reported ranking of 3100.',
    href: yeswehackHref,
  },
  {
    name: 'Intigriti',
    handle: 'ramjiapi049',
    mark: 'INT',
    value: '3300',
    rankLabel: 'Reported ranking',
    blurb: 'Bug bounty researcher on Intigriti with a reported ranking of 3300.',
    href: intigritiHref,
  },
]

export const platformChips = platforms.map((platform) => ({ label: platform.name, mark: platform.mark, href: platform.href }))

// Names and issuers are taken from the uploaded certificates themselves.
// No issue dates, expiry dates, credential IDs or verification links are shown.
export const certifications: Certification[] = [
  {
    code: 'SAL L1',
    name: 'Security Analyst Level 1',
    issuer: 'TryHackMe',
    image: './images/sal1-certificate.webp',
    alt: 'TryHackMe SAL1 Security Analyst Level 1 certificate awarded to Ramji Singh',
    note: 'Issuer confirmed on the certificate. No expiry date or credential ID is published.',
  },
  {
    code: 'GCC',
    name: 'Google Cybersecurity Certificate',
    issuer: 'Coursera',
    image: './images/google-cybersecurity-certificate.webp',
    alt: 'Google Cybersecurity Certificate of Completion awarded to Ramji Singh, issued by Coursera',
    note: 'Issued by Coursera, as printed on the certificate itself.',
  },
]

export const achievements = [
  {
    code: '2×',
    title: 'Hackathon winner',
    meta: 'Two hackathons won',
    note: 'Competitive events, judged on the work shipped during the event.',
  },
  {
    code: '2nd',
    title: 'CTF Hackathon — Runner-up',
    meta: 'Runner-up position',
    note: 'Placed second in a capture-the-flag hackathon competition.',
  },
]

export const about = [
  "I'm Ramji Singh, also known as ramjiapi, a cybersecurity researcher and ethical hacker focused on identifying security weaknesses and helping make digital systems more resilient.",
  'Through bug bounty programs, security research and competitive hacking events, I continuously challenge myself to understand how applications work, identify potential vulnerabilities and improve security practices.',
  'With 45+ valid bugs reported, recognition across bug bounty platforms, and achievements in hackathons and CTF competitions, I continue to develop my skills through practical security research.',
]

export const socials = [
  { label: 'LinkedIn', href: linkedinHref, mark: 'IN' },
  { label: 'GitHub', href: githubHref, mark: 'GH' },
  { label: 'Standoff 365', href: standoffHref, mark: 'S365' },
  { label: 'YesWeHack', href: yeswehackHref, mark: 'YWH' },
  { label: 'Intigriti', href: intigritiHref, mark: 'INT' },
]

export const disclosure =
  'Rankings and the 45+ figure are self-reported by the portfolio owner and have not been independently verified.'
