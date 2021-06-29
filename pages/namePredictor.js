import React, {useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import agify from './api/prediction'
import { Input } from "@chakra-ui/react"

const predictor = () => {
    const [input, setInput] = useState('')
    const [prediction, setPrediction] = useState('')

    const handleInputChange =  (event) => {
        event.preventDefault();
        setInput(event.target.value)
    }

    const makePrediction = async () => {
        const age = await agify(input)
        setPrediction(`${age} years old!`)
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Translate It!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Let us guess your age!
                </h1>
                <br />
                <p className={styles.description}>This uses the <a className={styles.link} href="https://api.agify.io/">agify</a> api which takes a name and sends back a prediction in the form of a number.</p>
                <p className={styles.description}>No API key necessary!</p>
                <Input placeholder="Input Name Here" onChange={(event) => handleInputChange(event)}></Input>
                <button className={styles.btn} onClick={() => makePrediction()}>Translate!</button>
                <br />
                <h2>The Prediction Will Appear Here:</h2>
                <p>{prediction}</p>
            </main>
        </div>
    )
}

export default predictor