import { Alert, Keyboard, TextInput, View } from 'react-native';
import { COLORS } from '../../theme';
import { Button } from '../Button';
import { styles } from './styles';
import { useState } from 'react';
import { api } from '../../services/api';

export function SendMessageForm() {
    const [message, setMessage] = useState('')
    const [sendingMessage, setSendingMessage] = useState(false)
    
    async function handleMessageSubmit() {
        const messageFormated = message.trim()
        
        if (messageFormated.length > 0) {
            setSendingMessage(true)
            await api.post('/messages', { message: messageFormated})
            setMessage('')
            Keyboard.dismiss()
            setSendingMessage(false)
            Alert.alert('Mensagem enviada com sucesso!')
        }
        else Alert.alert("escreva a mensagem para enviar.")
    }
    
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
            <Button 
                title="ENVIAR MENSAGEM" 
                backgroundColor={COLORS.PINK} 
                color={COLORS.WHITE} 
                isLoading={sendingMessage}
                onPress={handleMessageSubmit}
            />
        </View>
    )
}