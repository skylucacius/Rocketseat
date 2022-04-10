import { VscGithubInverted, VscSignOut } from 'react-icons/vsc'
import styles from './styles.module.scss'
import { AuthContext } from './../../contexts/Auth';
import { useContext, useState, FormEvent } from 'react';
import { api } from '../../services/api';

export function SendMessageForm() {

    const { user, signOut } = useContext(AuthContext)
    const [ message, setMessage ] = useState('')

    async function handleSendMessage(event: FormEvent) {
        event.preventDefault();
        if (!message.trim()) {return}
        await api.post('messages', {message})
        setMessage('')
    }

    return (
        <div className={styles.sendMessageFormWrapper}>
            <button onClick={signOut} className={styles.signOutButton}>
                <VscSignOut size="32"></VscSignOut>
            </button>

            <header className={styles.userInformation}>
                <div className={styles.userImage}>
                    <img src={user?.avatar_url} alt={user?.name} />
                </div>
                <strong className={styles.userName}>{user?.name}</strong>
                <span className={styles.userGithub}></span>
                <VscGithubInverted size="16"></VscGithubInverted>
                {user?.login}
            </header>

            <form onSubmit={handleSendMessage} className={styles.sendMessageForm}>
                <label htmlFor="message">Mensagem</label>
                <textarea 
                    name="message" id="message" placeholder="Qual sua expectativa para o evento?" 
                onChange={event => setMessage(event.target.value)} value = {message}>

                </textarea>
                <button type="submit">Enviar mensagem</button>
            </form>
        </div>
    )
}