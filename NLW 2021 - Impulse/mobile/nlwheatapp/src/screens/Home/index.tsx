import React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { styles } from './styles';
import { Header } from './../../components/Header/index';
import { MessageList } from './../../components/MessageList/index';
import { SigninBox } from './../../components/SigninBox/index';
import { SendMessageForm } from './../../components/SendMessageForm/index';
import { useAuth } from './../../hooks/auth';

export function Home() {
    const { user } = useAuth();
    return (
        <KeyboardAvoidingView 
            style={{ flex: 1 }}
            behavior={Platform.OS == 'ios' ? 'padding' : undefined}
        >
            <View style={styles.container}>
                <Header></Header>
                <MessageList></MessageList>
                {user ? <SendMessageForm /> : <SigninBox />}
            </View>
        </KeyboardAvoidingView>
    )
}