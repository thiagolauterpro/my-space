import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header';
import Profile from '../components/profile';
import PathsGrid from '../components/pathsGrid';
import SMGrid from '../components/SMGrid';
import Footer from '../components/footer';

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/users/thiagolauter', {
    "method": "GET",
    "headers": {
      "cookie": "_octo=GH1.1.1352885215.1640568972; logged_in=no",
      "Authorization": "Basic dGhpYWdvbGF1dGVyOg=="
    }
  })
  const user = await res.json()

  return {
    props: {
      user,
    },
  }
}

const Home: NextPage = ({ user }: any) => {
  const { locale } = useRouter();
  const { avatar_url } = user

  return (
    <div className={styles.container}>
      <Head>
        <title>Thiago Lauter</title>
        <meta name="description" content="My space" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header props={{
        locale: locale,
      }} />
      <main className={styles.main}>
        <Profile props={{
          avatar_url: avatar_url,
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