import Image from 'next/image'
import styles from './style.module.css'
import content from './locales/locales.json'

function Profile({ props }: any) {
  const { avatar_url, locale } = props

  return (
    <>
      <div className={styles.image}>
        <Image
          src={avatar_url}
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
        {content[locale].description}
      </p>
    </>
  )
}

export default Profile
