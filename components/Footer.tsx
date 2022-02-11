import Image from 'next/image'
import styled from 'styled-components'
import github from '../public/icons/github-line.svg'
import linkedin from '../public/icons/linkedin-box-line.svg'
import instagram from '../public/icons/instagram-line.svg'
import opensource from '../public/icons/open-source-line.svg'

export default function Footer() {
  return (
    <Container>
      <a
        href="https://github.com/thiagolauter"
        target="_blank"
        rel="noreferrer"
      >
        <span>GitHub</span>
        <Image src={github} alt="GitHub logo" layout="fill" />
      </a>
      <a
        href="https://www.linkedin.com/in/thiagolauter/"
        target="_blank"
        rel="noreferrer"
      >
        <span>LinkedIn</span>
        <Image src={linkedin} alt="LinkedIn logo" layout="fill" />
      </a>
      <a
        href="https://www.instagram.com/thiago_lauter/"
        target="_blank"
        rel="noreferrer"
      >
        <span>Instagram</span>
        <Image src={instagram} alt="Instagram logo" layout="fill" />
      </a>
      <a
        href="https://github.com/thiagolauter/my-space"
        target="_blank"
        rel="noreferrer"
      >
        <span>Source Code</span>
        <Image src={opensource} alt="Open source logo" layout="fill" />
      </a>
    </Container>
  )
}

const Container = styled.footer`
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  a {
    display: flex;
    aspect-ratio: 1 / 1;
    height: 24px;
    position: relative;
  }

  a > span {
    display: none;
  }

  @media (min-width: 700px) {
    padding: 0 10vw;

    a{
      height: 30px;
    }
  }
`
