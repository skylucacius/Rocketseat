import styles from './styles.module.scss'
import logoImg from '../../assets/logo.svg'

export function MessageList() {
    return (
        <div className={styles.messageListWrapper}>
        <img src={logoImg} alt="DoWhile2021" />
        <ul className={styles.messageList}>
            <li className={styles.message}>
                <p className={styles.messageContent}>Não vejo a hora de iniciar esse evento !</p>
                <div className={styles.messageUser}>
                    <div className={styles.userImage}>
                        <img src="https://github.com/skylucacius.png" alt="Lucas dos Santos" />
                    </div>
                    <span>Lucas dos Santos</span>
                </div>
            </li>

            <li className={styles.message}>
                <p className={styles.messageContent}>Não vejo a hora de iniciar esse evento !</p>
                <div className={styles.messageUser}>
                    <div className={styles.userImage}>
                        <img src="https://github.com/skylucacius.png" alt="Lucas dos Santos" />
                    </div>
                    <span>Lucas dos Santos</span>
                </div>
            </li>

            <li className={styles.message}>
                <p className={styles.messageContent}>Não vejo a hora de iniciar esse evento !</p>
                <div className={styles.messageUser}>
                    <div className={styles.userImage}>
                        <img src="https://github.com/skylucacius.png" alt="Lucas dos Santos" />
                    </div>
                    <span>Lucas dos Santos</span>
                </div>
            </li>

        </ul>
        </div>
    )
}