import React from 'react';
import { View } from 'react-native';
import {Background,Btn_menu} from './styles'
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native'

export default function header() {
        const navegacao = useNavigation();
 return (
   <Background>
       <Btn_menu onPress={()=> navegacao.toggleDrawer()}>
            <Feather name="menu" size={25} color="#fff"/>
       </Btn_menu>
   </Background>
  );
}