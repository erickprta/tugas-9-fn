import styles from "./Hero.module.css";

function Hero() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>ANGKASA</h2>
                    <h3 className={styles.hero__genre}>
                        Genre: Sci-Fi, Drama, Romance, action, Horor
                    </h3>
                    <p className={styles.hero__decription}>
                    Film adalah salah satu media komunikasi yang memiliki pengaruh besar dalam membentuk pola pikir masyarakat. Selain itu, film merupakan sarana untuk menyampaikan pesan penting kepada masyarakat dengan cara yang menghibur dan menyenangkan.
                    </p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className="hero__right">
                    <img className={styles.hero__image}
                    src="https://picsum.photos/536/354"
                    alt="placeholder"/>
                </div>
            </section>
        </div>
    )
}
export default Hero;