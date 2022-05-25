import styled from 'styled-components'

export const Container = styled.header`
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
`
