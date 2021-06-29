import React, { useState } from 'react'
import dogImage from "./api/dogs";
import { Image } from '@chakra-ui/image';
import { Box } from '@chakra-ui/layout';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const dogImageFinder = () => {
    const [dog, setDog] = useState()

    const findDogImage = async () => {
        const image = await dogImage()
        setDog(image)
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Find a Dog!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Let's find a dog!
                </h1>
                <br />
                <p className={styles.description}>This uses the <a className={styles.link} href="https://dog.ceo/dog-api/">Dog</a> Api which will find a random dog image and display it.</p>
                <p className={styles.description}>No API key necessary!</p>
                <button className={styles.btn} onClick={() => findDogImage()}>Find!</button>
                <br />
                <h2>Your Dog Will Appear Here:</h2>
                {dog && <Box boxSize="sm">
                    <Image src={dog} alt="Doggies!" />
                </Box>}
            </main>
        </div>
    )
}

export default dogImageFinder;