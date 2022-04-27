import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Header } from './../../components/Header/index';
import { MessageList } from './../../components/MessageList/index';
import { SigninBox } from './../../components/SigninBox/index';
import { SendMessageForm } from './../../components/SendMessageForm/index';

export function Home() {
    return (
        <View style={styles.container}>
            <Header></Header>
            <MessageList></MessageList>
            <SigninBox></SigninBox>
            {/* <SendMessageForm></SendMessageForm> */}
        </View>
    )
}