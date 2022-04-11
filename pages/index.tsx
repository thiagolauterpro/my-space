import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styled from 'styled-components';
import Header from '../components/Header';
import Image from 'next/dist/client/image';
import Link from 'next/dist/client/link';
import Footer from '../components/Footer';

const content = {
  'en-us': {
    profile: {
      description: 'I am a problem solver, Programmer & Web developer.',
    },
    paths: [
      { title: 'CV', descripition: 'Here you can find my curriculum vitae.' },
    ],
  },
  'pt-br': {
    profile: {
      description:
        'Sou um solucionador de problemas, programador & desenvolvedor Web.',
    },
    paths: [
      { title: 'CV', descripition: 'Aqui você encontra meu curriculum vitae.' },
    ],
  },
};

const Home: NextPage = () => {
  const { locale } = useRouter();

  return (
    <Container>
      <Head>
        <title>Thiago Lauter</title>
        <meta name="description" content="My space" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
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

        <p className="description">{content[locale].profile.description}</p>
        <div className="grid">
          <Link href="/cv">
            <a className="card">
              <h2>{content[locale].paths[0].title} &rarr;</h2>
              <p>
                {content[locale].paths[0].descripition +
                  String.fromCodePoint(parseInt('0x1F609'))}
              </p>
            </a>
          </Link>
        </div>
      </main>
      <Footer />
    </Container>
  );
};

const Container = styled.body`
  main {
    width: auto;
    min-height: 80vh;
    padding: 1rem 4%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

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

  .grid {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
  }

  .card {
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    max-width: 300px;
  }

  .card:hover,
  .card:focus,
  .card:active {
    color: #0070f3;
    border-color: #0070f3;
  }

  .card h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  .card p {
    margin: 0;
    font-size: 1.25rem;
  }
`;

export default Home;
