import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-pink-400 dark:text-zinc-200 dark:hover:text-pink-400"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-pink-400" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description: 'I’m Alessandra Rayes Forte, Polyglot coder with a flair for languages and tech.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Alessandra Rayes Forte, polyglot coder with a flair for languages and tech. 
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              My passion for languages naturally led me to coding. I see the parallels between the complex design of traditional human languages and the structured world of coding. Both involve understanding rules, logic, and nuances. Just as learning a new language expands horizons, mastering coding languages permits new avenues for creativity and problem-solving. It&apos;s this blend of linguistic understanding and technological innovation that fuels my passion for both worlds.
            </p>
            <p>
              My love of languages and coding isn&apos;t self-contained; it&apos;s deeply intertwined with my passion for travel. Exploring different cultures provides me with fresh perspectives, encouraging me to view the world in diverse ways. This mindset translates into my coding journey, enabling me to think innovatively and consider unconventional approaches and unorthodox solutions. In other words, traveling has taught me to embrace the uncertainty and possibility of alternatives to find potential solutions that might not be immediately apparent or familiar but are incredibly effective.
            </p>
            <p>
              As a developer, I aim to solve real-world problems with meticulous coding and responsive design, focusing on seamless user experience. My enthusiasm lies in transforming inventive concepts into impactful, user-friendly applications, building a future of progress and empowerment. Let’s build together!
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/alerayes" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/arayesforte/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:alerayes&apos;hotmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              alerayes&apos;hotmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
