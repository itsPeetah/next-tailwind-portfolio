import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import RetroButton from '../components/RetroButton'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 font-display">
      <Head>
        <title>Next.js Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 | flex-col md:flex-row | items-center justify-start text-center p-4">

        <div className='flex flex-col items-start border-2 border-black p-4 w-full sm:min-w-sm sm:max-w-sm md:h-full'>
        itsPeetah
          <div className='border-2 border-black p-2 w-full'>
          <img className="min-w-full max-h-80  object-cover object-top" src="/img/selfie.jpg"/>
          <p className='mt-2 pt-2 text-gray-600 border-t-2 border-t-black'>generic elevator mirror selfie</p>
          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>



        <RetroButton>Test 1</RetroButton>
        <RetroButton>Test 2</RetroButton>
        <RetroButton>Test 3</RetroButton>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        
      </footer>
    </div>
  )
}

export default Home
