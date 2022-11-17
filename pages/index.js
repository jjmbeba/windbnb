import Head from 'next/head'
import Layout from '../components/Layout'


export default function Home() {
  return (
    <div>
      <Head>
      <title>WindBnb</title>
      <link rel='icon' href='/hotel.png'/>
      </Head>
      <main className='w-screen h-screen'>
        <Layout/>
      </main>
      <script type='module' src='../stays.json'></script>
    </div>
  )
}
