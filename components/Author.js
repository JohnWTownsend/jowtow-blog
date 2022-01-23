import styles from './Author.module.css'

export default function Author() {
    return (
        <>
            <div className={styles.author}>
                <img className={styles.authorImage} src="/images/Author.jpg"/>
                <div className={styles.authorDescription}>
                    <div className={styles.authorIntro}>Howdy, I'm John Townsend! Thanks for checking out the blog!</div>
                    <div className={styles.authorIntroCont}>I love learning new things and sharing knowledge with others. My profession is Software Engineering, but I love to learn about other trades and crafts as well.</div>
                </div>
            </div>
        </>
    )
}