import styles from './App.module.scss';
import { LoginBox } from './../components/LoginBox/index';
import { MessageList } from './../components/MessageList/index';
import { AuthContext } from '../contexts/Auth';
import { useContext } from 'react';
import { SendMessageForm } from './../components/SendMessageForm/index';

export function App() {
  const { user } = useContext(AuthContext)

  return (
    <main className={`${styles.contentWrapper} ${!!user ? styles.contentSigned : ''}`}>
      <MessageList />
      { !!user ? <SendMessageForm/> : <LoginBox/> }
    </main>
  )
}