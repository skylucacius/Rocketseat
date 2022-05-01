import { View } from "react-native";
import { styles } from "./styles";
import { Button } from './../Button';
import { COLORS } from './../../theme/colors';
import { useAuth } from "../../hooks/auth";

export function SigninBox() {
    const { signIn, isSigning } = useAuth()
    return (
        <View style={styles.container}>
            <Button
                title="ENTRAR COM GITHUB"
                color={COLORS.BLACK_PRIMARY} 
                backgroundColor={COLORS.YELLOW}
                icon="github"
                onPress={signIn}
                isLoading={isSigning}
            />
            
        </View>
    )
}