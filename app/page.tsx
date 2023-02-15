import Image from 'next/image'
import { Inter } from '@next/font/google'
import Grammar from './components/Grammar'
import HowUse from './components/HowUse'
import Translate from './components/Translate'


export default function Home() {
  return (
    <>
      <div className="fixed w-full text-center p-4 text-2xl text-red-600 bg-gray-800 " role="alert">
        <span className="font-medium">El diseño no es responsive aún.</span> Para mejor experiencia, no utilize celular o tablet.
      </div>
      <div className="fixed top-12 w-full text-center p-4 text-lg text-red-600 bg-gray-800 " role="alert">
        <span className="font-medium">Aun falta mejorar el sitio. Esta versión es para probar el corrector de ortografía.</span>
      </div>
      <div className='max-h-screen h-screen pt-10 bg-gray-900'>

        <h1 className=
          {
            `text-7xl text-transparent font-bold tracking-wider
              bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text
              max-w-full text-center pt-[30vh]`
          }
        >
          Convertidor de Texto
        </h1>
      </div>
      <HowUse />
      <Grammar />
      <Translate />
    </>
  )
}

