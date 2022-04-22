import React, { Component } from 'react';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
// import { ColorValue, Text, TouchableOpacityProps, View } from 'react-native';
// import Ionicons from '@expo/vector-icons/Ionicons';
// type Props = TouchableOpacityProps & {
//     title: string,
//     color: ColorValue,
//     backgroundColor: ColorValue
// }



// export function Button({title, color, backgroundColor, ...rest} : Props) {
//     return (
//         // <TouchableOpacity style = {[styles.button, {backgroundColor} ]} {...rest}>
//         <View>
//             <Ionicons name="md-checkmark-circle" size={32} color="green" />
//             {/* <AntDesign name="github" size={24} style={styles.icon} /> */}
//              <Text style={[styles.title, { color }]}>
//                  {title}
//              </Text>
//         {/* // </TouchableOpacity> */}
//         </View>
//     )
// }


import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export function Button() {
    return (
        <View>
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
        </View>
    )
}