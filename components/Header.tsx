import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/dist/client/link';
import logo from '/public/images/logo.png';
import { useRouter } from 'next/router';

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

export default function Header() {
  const router = useRouter();
  const locale = router.locale;

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
            router.push(router.pathname, router.pathname, { locale: 'en-us' });
          } else {
            router.push(router.pathname, router.pathname, { locale: 'pt-br' });
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
