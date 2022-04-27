import { TextInput, View } from 'react-native';
import { COLORS } from '../../theme';
import { Button } from '../Button';
import { styles } from './styles';
import { useState } from 'react';

export function SendMessageForm() {
    const [message, setMessage] = useState('')
    const [sendingMessage, setSendingMessage] = useState(false)
    
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input} 
                keyboardAppearance = "dark" 
                placeholder = "Qual é a sua expectativa para o evento ?" 
                placeholderTextColor = {COLORS.GRAY_PRIMARY} 
                multiline maxLength={140} 
                onChangeText={setMessage} 
                value={message} 
                editable={!sendingMessage}
            />
            <Button title="ENVIAR MENSAGEM" backgroundColor={COLORS.PINK} color={COLORS.WHITE}/>
        </View>
    )
}