import Head from 'next/head'
import styles from '../styles/Home.module.css'

const About = () => {
    return (
    <div className={styles.container}>
        <Head>
            <title>About</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
        <main className={styles.main}>
            <h1 className={styles.title}>
            Welcome to <a href="#">About!</a>
            </h1>
            <p className={styles.card}>
                This is a place that you can learn about me and what I do!
                There probably won't be much here for now but it should grow!
            </p>
        </main>
            
        <footer className={styles.footer}>
            <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
            </a>
        </footer>
    </div>
    )
}

export default About