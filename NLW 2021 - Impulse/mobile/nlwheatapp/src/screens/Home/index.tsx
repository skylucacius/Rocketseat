import React from 'react';
import { View,Text } from 'react-native';
import { styles } from './styles';
import { Header } from './../../components/Header/index';
import { MessageList } from './../../components/MessageList/index';

export function Home() {
    return (
        <View style={styles.container}>
            <Header></Header>
            <MessageList></MessageList>
        </View>
    )
}