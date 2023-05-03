import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeaderWrapper from '@/components/Header/HeaderWrapper'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=''

    >
      <HeaderWrapper></HeaderWrapper>
    </main>
  )
}
