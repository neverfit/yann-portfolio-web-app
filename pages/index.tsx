/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { Inter } from 'next/font/google'
import About from '@/src/components/About'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Header from '@/src/components/Header'
import Hero from '@/src/components/Hero'
import Skills from '@/src/components/Skills'
import Projects2 from '@/src/components/Projects2'
import Contact from '@/src/components/Contact'
import Footer from '@/src/components/Footer'
import { sanityClient } from '../sanity'
import { log } from 'console'

const inter = Inter({ subsets: ['latin'] })

interface Props{
  project:any
}

export default function Home({project}:Props) {
  console.log(project)

  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/50'>


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
      <section id="skills" className='snap-center'>
        <Skills />
      </section>

      {/*Projects*/}
      <section id="projects2" className='snap-center'>
        <Projects2 project={project} />
      </section>

      {/*Contact Me*/}
      <div id="contact" className='snap-start'>
        <Contact />
      </div>





      {/*HomeLink*/}
      <Link href='#header'>
        <footer className='sticky bottom-2 px-2 w-full cursor-pointer'>
          <div className='flex flex-col items-start '>
            <span className='text-gray-500 hover:text-[#F7AB0A] cursor-pointer text-center '>
              <img
                className='h-10 w-10 justify-center rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
                src="/img/avatar2.png"
                alt=""
              />
              Up!</span>
          </div>
        </footer>
      </Link >


      {/*Footer*/}
      <div id="footer" className='snap-start'>
        <Footer />
      </div>

      {/*MouseTrail*/}
      {/* <div id="circles" className='snap-start'>
        <Circles />
      </div> */} 

      {/* <div>{project.map((item: any) => (
          <div key={item._id}>
            {item.title}
          </div>
        ))}
      </div> */}


    </div>
  )
}


export const getServerSideProps = async () => {
  const projectQuery= `*[_type == "project"] {
    _id,
    title,
    description,
    image,
    _createdAt,
}`

const project = await sanityClient.fetch(projectQuery)

if(!project){
  return {
      notFound: true
  }
}

return {
 props: {
  project,
},
}
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