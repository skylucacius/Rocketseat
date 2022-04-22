import { View } from "react-native";
import { styles } from "./styles";
import { Button } from './../Button';
import { COLORS } from './../../theme/colors';

export function SigninBox() {
    return (
        <View style={styles.container}>
            <Button
                title="ENTRAR COM GITHUB" 
                color={COLORS.BLACK_PRIMARY} 
                backgroundColor={COLORS.YELLOW}
            />
            
        </View>
    )
}