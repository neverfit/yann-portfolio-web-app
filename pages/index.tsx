import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/src/components/Layouts/Header'
import Footer from '@/src/components/Layouts/Footer'
import Hero from '@/src/components/Layouts/Hero'
import About from '@/src/components/Layouts/About'
import Skills from '@/src/components/Layouts/Skills'
import Projects from '@/src/components/Layouts/Projects'
import Contact from '@/src/components/Layouts/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0'>
      {/*Header*/}
      <section id="header" className='snap-center'>
        <Header />
      </section>

      {/*Hero*/}
      <section id="hero" className='snap-center'>
        <Hero />
      </section>

      {/*About*/}
      <section id="about" className='snap-center'>
        <About />
      </section>

      {/*Skills*/}
      <section id="skills" className='snap-start'>
        <Skills />
      </section>

      {/*Projects*/}
      <div id="projects" className='snap-center'>
        <Projects />
      </div>

      {/*Contact Me*/}
      <div id="contact" className='snap-start'>
        <Contact name={''} email={''} subject={''} message={''} />

      </div>


    </div>
  )
}




{/* <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Get started by editing&nbsp;
            <code className="font-mono font-bold">pages/index.tsx</code>
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
      </main> */}
