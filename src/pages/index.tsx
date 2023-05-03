import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeaderWrapper from '@/components/Header/HeaderWrapper'
import OpenForJobs from '@/components/OpenForJobs'
import Vita from '@/components/Vita'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=''

    >
      <HeaderWrapper></HeaderWrapper>
      <OpenForJobs></OpenForJobs>
      <Vita></Vita>
    </main>
  )
}
