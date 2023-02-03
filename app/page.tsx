import Image from 'next/image'
import { Inter } from '@next/font/google'
import Grammar from './components/Grammar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='max-h-screen h-screen pt-10 bg-gray-900'>

        <h1 className=
          {
            `text-7xl text-transparent font-bold tracking-wider
              bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text
              max-w-full text-center pt-[30vh]`
          }
        >
          Text Converter
        </h1>

      </div>
      <Grammar />
    </>
  )
}

