import Image from 'next/image'
import { Inter } from '@next/font/google'
import CapitalizeInput from './components/CapitalizeInput'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='h-[120vh] bg-gray-900'>
      <div className='flex justify-center items-center '>
          <h1 className='text-5xl text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text font-bold absolute top-[33%] left-[33%] translate-x-1/2 translate-y-1/2 tracking-wider'>Text Converter</h1>
          <CapitalizeInput/>
      </div>
    </div>
    </>
  )
}

