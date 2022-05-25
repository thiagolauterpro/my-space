import Image from 'next/image'
import Link from 'next/dist/client/link'
import logo from '/public/images/logo.png'
import { useRouter } from 'next/router'
import { Container } from './styles'

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

export function Header({ props }) {
  const { locale } = props
  const router = useRouter()

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
