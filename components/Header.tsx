import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/dist/client/link';
import logo from '/public/images/logo.png';
import AppContext from '../contexts/AppContext';
import { useRouter } from 'next/router';
import { useContext } from 'react';

function flag(locale): string {
  if (locale === 'en-us') {
    return (
      String.fromCodePoint(parseInt('0x1F1E7')) +
      String.fromCodePoint(parseInt('0x1F1F7'))
    );
  }
  return (
    String.fromCodePoint(parseInt('0x1F1FA')) +
    String.fromCodePoint(parseInt('0x1F1F8'))
  );
}

export default function Header({ props }) {
  const value = useContext(AppContext);
  const { locale } = value.state;
  const router = useRouter();

  return (
    <Container>
      <Link href="/">
        <a>
          <span>Home</span>
          <Image src={logo} priority={true} alt="logo do site" />
        </a>
      </Link>
      <button
        className="flag"
        onClick={() => {
          if (locale === 'pt-br') {
            value.setLocale('en-us');
          } else {
            value.setLocale('pt-br');
          }
        }}
      >
        {flag(locale)}
      </button>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  height: 10vh;
  width: 100%;
  padding: 8px;

  a {
    display: block;
    height: 100%;
    aspect-ratio: 1/1;
  }

  a > span {
    display: none;
  }

  .flag {
    padding: 0 4px;
    font-size: 2em;
    background: #fff;
    border: none;
    cursor: pointer;
  }

  @media (min-width: 700px) {
  }
`;
