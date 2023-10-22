import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoRezos from '@/images/logos/rezos-logo.svg'
import logoActNow from '@/images/logos/actnow-logo.svg'
import logoNexum from '@/images/logos/nexum-logo.svg'
import logoGetATat from '@/images/logos/getatat-logo.svg'
import logoColafo from '@/images/logos/colafo-logo.svg'
import Link from 'next/link'

const projects = [
  {
    name: 'Rezos',
    description:
      'Rezos is a dining reservation application inspired by OpenTable that includes a reservation system.',
    href: 'http://rezos.vercel.app',
    links: [
        {
          id: 1,
          href: 'http://rezos.vercel.app',
          label: 'rezos.app' 
        },
        {
          id: 2,
          href: 'https://github.com/alerayes/rezos',
          label: 'GitHub Repository'
        }
    ],
    logo: logoRezos,
  },
  {
    name: 'ActNow',
    description:
      'ActNow is a mobile application that helps companies achieve their carbon footprint emissions goal through the participation and engagement of their staff.',
    href: '',
    links: [
      { 
        id: 1,
        href: 'https://actnw.ca/', 
        label: 'actnw.ca' 
      },
      {
        id: 2,
        href: 'https://github.com/atom-squad',
        label: 'GitHub Repository'
      },
    ],
    logo: logoActNow,
  },
  {
    name: 'Nexum',
    description:
      'Nexum is a platform that will connect students and alumni of a post-secondary institution. It helps students in the job search by increasing their network.',
    href: '',
    links: [
      { 
        href: 'https://github.com/alerayes/nexum', 
        label: 'GitHub Repository' 
      }
    ],
    logo: logoNexum,
  },
  {
    name: 'Get a Tat',
    description:
      'Get a Tat is an online platform that connects tattoo artists with people who want to get a tattoo. Artists can upload their projects to the platform and customers can browse and book appointments with the artists whose style and portfolio they like the most.',
    href: '',
    links: [
      { 
        href: 'https://github.com/juggler-dev/webapp_html_get-a-tat', 
        label: 'GitHub Repository' 
      }
    ],
    logo: logoGetATat,
  },
  {
    name: 'Colafo',
    description:
      'Landing page of Colafo (Congresso Latino-Americano de Fisioterapia em Oncologia). This landing page was developed according to the client needs and instructions.',
    href: '',
    links: [
      { 
        href: 'https://colafo.com.br', 
        label: 'https://colafo.com.br' 
      }
    ],
    logo: logoColafo,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Learning, building, breathing in, breathing out, and building again"
      intro="As a graduate of Langara College in Vancouver, Canada, I gained hands-on experience by working on projects that simulated real-world industry-best practices and collaborating with teams of designers and developers in an agile environment. These are the ones that I’m most proud of. Over the last two years, I developed strong skills in project management, teamwork, and communication, and gained practical experience in front-end and back-end development. I am eager to continue learning and growing in the industry and excited to apply my skills and knowledge to tackle new challenges."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                {project.name}
            </h2>
            <Card.Description>{project.description}</Card.Description>
            {project.links.map((link) => (
                <p key={link.label} className="relative z-10 mt-2 flex text-sm font-medium text-zinc-400 transition hover:text-pink-400 dark:text-zinc-100">
                    <LinkIcon className="h-6 w-6 flex-none" />
                    <Link className="ml-2" href={link.href}>{link.label}</Link>
                </p>
            ))}
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
