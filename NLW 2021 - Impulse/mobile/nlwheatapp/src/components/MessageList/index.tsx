import { ScrollView } from 'react-native';
import { styles } from './styles';
import { Message } from './../Message/index';

export function MessageList() {

    const message = {
        id: '1',
        text: 'mensagem de teste',
        user: {
            name: 'Lucas',
            avatar_url: 'string'
        }
    }
    return (
        <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.content} 
            keyboardShouldPersistTaps="never"
        >
            <Message data = {message}/>
            <Message data = {message}/>
            <Message data = {message}/>
        </ScrollView>
    )
}