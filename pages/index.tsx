import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styled from 'styled-components'
import Header from '../components/Header'
import Image from 'next/dist/client/image'
import PathsGrid from '../components/pathsGrid'
import Footer from '../components/Footer'

const content = {
  'en-us': {
    description: 'I am a problem solver, Programmer & Web developer.',
  },
  'pt-br': {
    description:
      'Sou um solucionador de problemas, programador & desenvolvedor Web.',
  },
}

const Home: NextPage = () => {
  const { locale } = useRouter()

  return (
    <>
      <Head>
        <title>Thiago Lauter</title>
        <meta name="description" content="My space" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        props={{
          locale: locale,
        }}
      />
      <Main>
        <div className="container-image">
          <Image
            src="https://avatars.githubusercontent.com/u/50457461?v=4"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>

        <h1 className="title">Thiago Lauter</h1>

        <p className="description">{content[locale].description}</p>
        <PathsGrid
          props={{
            locale: locale,
          }}
        />
      </Main>
      <Footer />
    </>
  )
}

const Main = styled.main`
  width: auto;
  padding: 1rem 4%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .container-image {
    overflow: hidden;
    position: relative;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
  }

  .title,
  .description {
    text-align: center;
  }

  .title {
    margin: 0.5em 0 1rem 0;
  }

  .description {
    margin: 0 1em 1.5em 1em;
    font-size: 1.5rem;
  }
`

export default Home
