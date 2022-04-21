import { Text, View } from "react-native"
import { UserPhoto } from "../UserPhoto"
import { styles } from "./styles"

export function Message() {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>
                Texto da mensagem
            </Text>

            <View style={styles.footer}>
                <UserPhoto imageUri="https://avatars.githubusercontent.com/u/19652877?v=4ng" sizes="SMALL" />
                <Text style={styles.userName}>
                    Nome do usuário
                </Text>
            </View>
        </View>
    ) 
    
}