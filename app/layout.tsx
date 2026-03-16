import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dennis Shaba | Senior Software Engineer & Founder | Full Stack Developer',
  description: 'Experienced Software Engineer with expertise in full-stack development, team leadership, and building scalable platforms. View projects, ventures (Xello.ng, Zero Tax, Passiton.ng), and technical skills.',
  keywords: [
    'Dennis Shaba',
    'Software Engineer',
    'Full Stack Developer',
    'Next.js',
    'React',
    'Node.js',
    'Java',
    'Spring Boot',
    'Tech Entrepreneur',
    'CTO',
    'Founder',
    'Backend Developer',
    'Frontend Developer',
    'TypeScript',
    'Team Lead',
    'Xello.ng',
    'Zero Tax',
    'Passiton.ng'
  ],
  authors: [{ name: 'Dennis Shaba', url: 'https://dinixweb.github.io' }],
  creator: 'Dennis Shaba',
  publisher: 'Dennis Shaba',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dinixweb.github.io',
    title: 'Dennis Shaba | Senior Software Engineer & Founder',
    description: 'Experienced Software Engineer with expertise in full-stack development, team leadership, and building scalable platforms.',
    siteName: 'Dennis Shaba Portfolio',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/13332211?v=4',
        width: 400,
        height: 400,
        alt: 'Dennis Shaba - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dennis Shaba | Senior Software Engineer & Founder',
    description: 'Experienced Full Stack Developer with expertise in Next.js, React, Node.js, Java, and building scalable platforms.',
    images: ['https://avatars.githubusercontent.com/u/13332211?v=4'],
    creator: '@dinixweb',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  verification: {
    google: '',
  },
  alternates: {
    canonical: 'https://dinixweb.github.io',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dennis Shaba',
    url: 'https://dinixweb.github.io',
    image: 'https://avatars.githubusercontent.com/u/13332211?v=4',
    email: 'sd4live@gmail.com',
    jobTitle: 'Senior Software Engineer, Founder & CEO',
    birthPlace: {
      '@type': 'City',
      name: 'Abuja',
      addressCountry: 'NG',
    },
    sameAs: [
      'https://github.com/Dinixweb',
      'https://www.linkedin.com/in/dennis-shaba-a0770973/',
    ],
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Lunexcore Limited',
        url: '',
        jobTitle: 'Founder & CEO',
      },
      {
        '@type': 'Organization',
        name: 'eCore Service',
        url: 'https://ecoreservice.com/',
        jobTitle: 'Software Engineer',
      },
    ],
    knowsAbout: [
      'Full Stack Development',
      'Next.js',
      'React',
      'Node.js',
      'Java',
      'Spring Boot',
      'TypeScript',
      'System Architecture',
      'Team Leadership',
      'Microservices',
      'DevOps',
      'AWS',
      'GCP',
      'Docker',
      'Kubernetes',
    ],
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <meta name="google-site-verification" content="your-verification-code" />
        <link rel="canonical" href="https://dinixweb.github.io" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
