import styled from 'styled-components'
import type { NextPage } from 'next'

const Cv: NextPage = () => {
  return (
    <Container>
      <h1>cv</h1>
      <p>
        Hey! I&apos;m <span className="line-through">walking</span> building here.
      </p>
    </Container>
  )
}

const Container = styled.main`
  .line-through {
    text-decoration: line-through;
  }
`

export default Cv