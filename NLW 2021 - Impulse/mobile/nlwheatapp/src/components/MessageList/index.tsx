import { View } from 'react-native';
import { styles } from './styles';
import { Message } from './../Message/index';

export function MessageList() {
    return (
        <View style={styles.container}>
            <Message />
            <Message />
            <Message />
        </View>
    )
}