import Image from 'next/image'
import { Inter } from '@next/font/google'
import Grammar from '../components/Grammar/Grammar'
import HowUse from '../components/HowUse/HowUse'
import Translate from '../components/Translate/Translate'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <div className="fixed top-0 w-full text-center p-2 text-lg text-red-600 bg-gray-800 " role="alert">
        <span className="font-medium">Aun falta mejorar el sitio. Esta versión es para probar el corrector de ortografía.</span>
      </div>
      <div className='max-h-screen h-screen pt-10 bg-gray-900 flex flex-col items-center'>

        <h1 className=
          {
            `text-7xl text-transparent font-bold tracking-wider
              bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text
              max-w-full text-center pt-[30vh]`
          }
        >
          Convertidor de Texto
        </h1>
        <Link href='/tools' className='inline-block text-3xl text-white bg-blue-900 rounded-lg p-3 my-10'>
          Probar
        </Link>
      </div>
      <HowUse />
    </>
  )
}

