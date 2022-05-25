import styled from 'styled-components'

export const Container = styled.footer`
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  a {
    display: flex;
    aspect-ratio: 1 / 1;
  }

  a > span {
    display: none;
  }

  @media (min-width: 700px) {
    padding: 0 10vw;

  }
`