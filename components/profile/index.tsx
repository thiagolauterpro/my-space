import Image from 'next/image'
import styles from '/styles/Home.module.css'
import content from './locales/locales.json'

function Profile({ props }: any) {

  return (
    <>
      <div className={styles.image}>
        <Image
          src={props.avatar_url}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>

      <h1 className={styles.title}>
        Thiago Lauter
      </h1>

      <p className={styles.description}>
        {content[props.locale].description}
      </p>
    </>
  )
}

export default Profile
