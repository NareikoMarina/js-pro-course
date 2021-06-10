import styles from './Card.module.css'

const Card = ({ children, footer }) => (
    <div className={styles.root}>
        <div className={styles.content}>
            {children}
        </div>
        <div className={styles.footer}>
            {footer}
        </div>
    </div>
)

export default Card;