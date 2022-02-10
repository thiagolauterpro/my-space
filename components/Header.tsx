import Image from 'next/image'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import logobaw from '/public/images/logobaw.png'

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

  .flag {
    padding: 0 4px;
    font-size: 2em;
    background: #fff;
    border: none;
    cursor: pointer;
  }

  @media (min-width: 700px) {
  }
`

function flag(locale: string): string {
  if (locale === 'en-us') {
    return (
      String.fromCodePoint(parseInt('0x1F1E7')) +
      String.fromCodePoint(parseInt('0x1F1F7'))
    )
  }
  return (
    String.fromCodePoint(parseInt('0x1F1FA')) +
    String.fromCodePoint(parseInt('0x1F1F8'))
  )
}

export default function Header({ props }) {
  const { locale } = props
  const router = useRouter()

  return (
    <Container>
      <a>
        <Image src={logobaw} priority={true} />
      </a>
      <button
        className="flag"
        onClick={() => {
          if (locale === 'pt-br') {
            router.push('/', '/', { locale: 'en-us' })
          } else {
            router.push('/', '/', { locale: 'pt-br' })
          }
        }}
      >
        {flag(locale)}
      </button>
    </Container>
  )
}
