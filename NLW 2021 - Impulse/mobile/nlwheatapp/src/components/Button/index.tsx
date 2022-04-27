import { styles } from './styles';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { ColorValue, Text, TouchableOpacityProps, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
    title: string,
    color: ColorValue,
    backgroundColor: ColorValue,
    icon? : React.ComponentProps<typeof AntDesign>['name'],
    isLoading? : Boolean
}

export function Button({title, color, backgroundColor, icon, isLoading=false, ...rest} : Props) {
    return (
        <TouchableOpacity style = {[styles.button, {backgroundColor} ]} {...rest}>
{
    isLoading ? <ActivityIndicator color = {color}/> :
        <>
            <AntDesign name={icon} size={24} style={styles.icon} activeOpacity={0.7} disabled={isLoading}/>
            <Text style={[styles.title, { color }]}>{title}</Text>
        </>
}
       </TouchableOpacity>
    )
}