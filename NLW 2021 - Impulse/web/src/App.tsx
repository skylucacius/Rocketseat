import styles from './App.module.scss';
import { LoginBox } from './../components/LoginBox/index';
import { MessageList } from './../components/MessageList/index';

export function App() {
  return (
    <main className={styles.contentWrapper}>
      <MessageList />
      <LoginBox />
    </main>
  )
}