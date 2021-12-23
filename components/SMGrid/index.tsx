import Image from 'next/image'
import styles from '/styles/Home.module.css'
import github_logo from '/public/images/GitHub-Logo.svg'
import instagram_logo from '/public/images/Instagram-Logo.svg'
import linkedin_logo from '/public/images/LinkedIn-Icon-Logo.svg'

function SMGrid(){
    return (
        <div className={styles.socialMedia}>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/thiagolauter/">
                <Image
                  src={linkedin_logo}
                  alt="LinkedIn"
                  width={72} height={72}
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/thiagolauter">
                <Image
                  src={github_logo}
                  alt="GitHub"
                  width={72} height={72}
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/thiago_lauter/">
                <Image
                  src={instagram_logo}
                  alt="Instagram"
                  width={72} height={72}
                />
              </a>
            </li>
          </ul>
        </div>
    )
}

export default SMGrid