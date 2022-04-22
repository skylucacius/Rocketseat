import { styles } from './styles';
import { TouchableOpacity } from 'react-native';
import { ColorValue, Text, TouchableOpacityProps, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
    title: string,
    color: ColorValue,
    backgroundColor: ColorValue
}


export function Button({title, color, backgroundColor, ...rest} : Props) {
    return (
        <TouchableOpacity style = {[styles.button, {backgroundColor} ]} {...rest}>
            <AntDesign name="github" size={24} style={styles.icon} />
            <Text style={[styles.title, { color }]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}