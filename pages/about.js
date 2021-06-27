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
                    About Me!
                </h1>
                <div className={styles.description}>
                    <p>
                        This is a place that you can learn about me and what I do!
                        There probably won't be much here for now but it should grow!
                    </p>
                    <p>
                        I am a full stack software engineer that loves to learn.
                        I am experienced in languages and frameworks such as ReactJS and NodeJS.
                    </p>
                </div>
                <h2>Here are some of my projects!</h2>
                <div className={styles.grid}>
                    <a className={styles.card} href="https://youthful-raman-5b3e98.netlify.app/">
                        <h3>Visual Dashboard</h3>
                        A PWA using React and Firebase to make a visual website bookmark.
                        My grandma is the inspiration for this project.
                        It's built to be as easy and visual as possible.
                        <br />
                        <br />
                        <h6>Deployed on Netlify.</h6>
                    </a>
                    <a className={styles.card} href="https://awesome-euclid-d796e4.netlify.app/">
                        <h3>Cinema Portal</h3>
                        This Is a quiz and practice app made for the Digital Cinema department at UVU.
                        This project is made with VueJS and Vuetify.
                        <br />
                        <br />
                        <h6>Deployed on Netlify.</h6>
                    </a>
                    <a className={styles.card} href="https://obscure-plateau-74859.herokuapp.com/">
                        <h3>Node Zoo</h3>
                        A very simple CRUD app built in NodeJS using MongoDB and EJS.
                        <br />
                        <br />
                        <h6>Deployed on Heroku.</h6>
                    </a>
                    <a className={styles.card} href="https://elastic-heisenberg-746596.netlify.app/">
                        <h3>Star Wars Guide</h3>
                        Vue app using the SWAPI api.
                        Made with VueJS and Vuetify.
                        <br />
                        <br />
                        <h6>Deployed on Netlify.</h6>
                    </a>
                </div>
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

export default About