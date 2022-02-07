import Image from 'next/image'
import styled from 'styled-components'
import github from '../public/icons/github-line.svg'
import linkedin from '../public/icons/linkedin-line.svg'
import instagram from '../public/icons/instagram-line.svg'
import opensource from '../public/icons/open-source-line.svg'

const Container = styled.footer`
  bottom: 0;
  position: fixed;
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  a{
    display: flex;
  }
`;

export default function Footer() {
  return (
    <Container>
      <a
        href="https://github.com/thiagolauter"
        target="_blank">
        <Image src={github} />
      </a>
      <a
        href="https://www.linkedin.com/in/thiagolauter/"
        target="_blank">
        <Image src={linkedin} />
      </a>
      <a
        href="https://www.instagram.com/thiago_lauter/"
        target="_blank">
        <Image src={instagram} />
      </a>
      <a
        href="https://github.com/thiagolauter/my-space"
        target="_blank">
        <Image src={opensource} />
      </a>
    </Container>
  );
}
