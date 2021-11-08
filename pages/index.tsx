import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = ({ user }: any) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <Image
        src={user.avatar_url}
        alt="Picture of the author"
        width={400}
        height={400}
      />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/users/thiagolauter')
  const user = await res.json()

  return {
    props: {
      user,
    },
  }  
}

export default Home
