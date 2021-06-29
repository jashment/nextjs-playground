import styles from '../../styles/Home.module.css'

const Footer = () => {
    return (
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
    )
}

export default Footer