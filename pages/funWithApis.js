import Head from 'next/head'
import styles from '../styles/Home.module.css'

const funWithApis = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    See the cool things you can do with APIs!
                </h1>

                <div className={styles.grid}>
                    <a className={styles.card} href="/namePredictor">
                        <h3>Prediction API</h3>
                        Predict your age based on your name!
                        No API key necessary, just get predicting!
                        <br />
                        <br />
                        <h6>api.agify.io/</h6>
                    </a>
                </div>
            </main>
        </div>
    )
}

export default funWithApis;