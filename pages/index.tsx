import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Profile from '../components/profile';
import PathsGrid from '../components/pathsGrid';
import SMGrid from '../components/SMGrid';
import Footer from '../components/footer';

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/users/thiagolauter')
  const user = await res.json()

  return {
    props: {
      user,
    },
  }
}

const Home: NextPage = ({ user }: any) => {
  const { locale } = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Thiago Lauter</title>
        <meta name="description" content="My space" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Profile props={{
          avatar_url: user.avatar_url,
          locale: locale,
        }} />
        <PathsGrid props={{
          locale: locale
        }} />
        <SMGrid />
      </main>
      <Footer />
    </div>
  )
}

export default Home