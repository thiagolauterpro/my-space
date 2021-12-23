import Link from 'next/link'
import styles from '/styles/Home.module.css'
import content from './locales/locales.json'


function PathsGrid({ props }: any) {
    const { locale } = props

    return (
        <div className={styles.grid}>
            <Link href="/cv">
                <a className={styles.card}>
                    <h2>{content[locale][0].title} &rarr;</h2>
                    <p>{content[locale][0].descripition + String.fromCodePoint(parseInt(content[locale][0].emoji))}</p>
                </a>
            </Link>
        </div>
    )
}

export default PathsGrid