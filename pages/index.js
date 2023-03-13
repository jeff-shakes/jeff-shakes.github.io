import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Combined from '@/components/Combined';

export default function Home() {
  return (
    <div className='m-0 p-0 border-spacing-0 overflow-y-scroll overflow-x-hidden outline-none bg-slate-300 h-screen no-underline list-none text-gray-600 scroll-smooth z-0 scrollbar-track-gray-400/20 scrollbar-thumb-blue-400/80 scrollbar-thin'>
      <Head>
        <title>Jeffs Portfolio</title>
      </Head>

    <Header />

    <section id='hero' className=' h-screen dark:text-white'>
      <Hero />
    </section>

    <section id='about' className=''>
      <About />
    </section>

    <section id='projects' className=''>
      <Projects />
    </section>

    <section id='experience' className=''>
      <Combined />
    </section>

    <section id='contact' className=''>
      <Contact />
    </section>

    <Footer />
    </div>
  )
}
