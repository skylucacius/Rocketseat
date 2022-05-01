import { ScrollView } from 'react-native';
import { styles } from './styles';
import { Message, MessageProps } from './../Message/index';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { io } from 'socket.io-client';

let messagesQueue:MessageProps[] = []

const socket = io(String(api.defaults.baseURL))
socket.on('new_message', (new_message) => {
    messagesQueue.push(new_message)
})

export function MessageList() {
    const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([])

    useEffect(() => {
        async function fetchMessages() {
            const messagesResponse = await api.get<MessageProps[]>('/messages/last3')
            setCurrentMessages(messagesResponse.data)
        }
        fetchMessages()
    }, [])
    
    useEffect(() => {
        const timer = setInterval(() => {
            if (messagesQueue.length > 0) {
                setCurrentMessages(prevState => [messagesQueue[0], prevState[0], prevState[1]])
                messagesQueue.shift()
            }
        },3000)

        return () => clearInterval(timer)
    }
    ,[])

    return (
        <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.content} 
            keyboardShouldPersistTaps="never"
        >
            
            {currentMessages.map((message) => <Message key={message.id} data={message} /> )}
            </ScrollView>
    )
}