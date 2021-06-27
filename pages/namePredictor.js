import React, {useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import agify from './api/prediction'

const predictor = () => {
    const [input, setInput] = useState('')
    const [prediction, setPrediction] = useState('')

    const handleInputChange =  (event) => {
        event.preventDefault();
        console.log(event.target.value)
        setInput(event.target.value)
    }

    const makePrediction = async () => {
        console.log('input', input)
        // await setPrediction(agify(input))
        await console.log('predicted', agify(input))
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Translate It!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <input onChange={(event) => handleInputChange(event)}></input>
                <button onClick={() => makePrediction()}>Translate!</button>
                <br />
                <h2>The Prediction Will Appear Here:</h2>
                {/* <p>{prediction}</p> */}
            </main>

            <footer className={styles.footer}>
                <a
                href="https://github.com/jashment"
                target="_blank"
                rel="noopener noreferrer"
                >
                Visit my Github{' '}
                <img src="/GitHub-Mark-32px.png" alt="GitHub Logo" className={styles.logo} />
                </a>
            </footer>
        </div>
    )
}

export default predictor