import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Popsy</title>
        <meta name="description" content="Welcome to Popsy" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
          <Image
            src="/popsy.png"
            alt="Popsy Logo"
            width={400}
            height={258/2}
          />
        </div>

        <p className={styles.description}>
          Stream on
        </p>

        <div className={styles.grid}>
          <a href="https://plex.tv" className={styles.card}>
            <Image
              src="/plex.png"
              alt="Plex Logo"
              width={151}
              height={55}
            />
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://filmhub.com?utm_source=alice&utm_medium=web&utm_campaign=alice">
          <span>
            Filmmaker?&nbsp;Submit&nbsp;via{' '}
          </span>
          <span className={styles.logo}>
            <Image src="/filmhub-dark.png" alt="Filmhub Logo" width={1200/9} height={128/9} />
          </span>
        </a>
      </footer>
    </div>
  )
}
