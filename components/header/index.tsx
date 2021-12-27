import styles from './style.module.css'
import { useRouter } from 'next/router'

function flag(locale: string): string {
    if (locale === 'en-us') {
        return String.fromCodePoint(parseInt('0x1F1E7')) + String.fromCodePoint(parseInt('0x1F1F7'))
    }
    return String.fromCodePoint(parseInt('0x1F1FA')) + String.fromCodePoint(parseInt('0x1F1F8'))
}

export default function Header({ props }: any) {
    const { locale } = props
    const router = useRouter()

    return (
        <header className={styles.container}>
            <h1 className={styles.title}>
                Thiago Lauter
            </h1>
            <button
                className={styles.flag}
                onClick={
                    () => {
                        if (locale === 'pt-br') {
                            router.push('/', '/', { locale: 'en-us' })
                        } else {
                            router.push('/', '/', { locale: 'pt-br' })
                        }
                    }
                }
            >
                {
                    flag(locale)
                }
            </button>
        </header >
    )
}