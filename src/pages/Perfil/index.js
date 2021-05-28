import React,{useContext} from 'react';
import {Background,Name_user,Btn_registrar,Btn_Texto,Btn_sair} from './styles'
import { View,Text, ActivityIndicator } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import {useNavigation} from '@react-navigation/native'
import Header from '../../components/header';

export default function Perfil() {
    const navegacao = useNavigation();
    const {singOut,user, loadingAuth} =useContext(AuthContext);
 return (
   <Background>
     <Header/>
     <Name_user>{user && user.nome}</Name_user>

     <Btn_registrar onPress={()=>navegacao.navigate('Registrar')}>
       <Btn_Texto>REGISTRAR GASTOS</Btn_Texto>
     </Btn_registrar>

     <Btn_sair onPress={()=> singOut()}>
      {
        loadingAuth ? (<ActivityIndicator size={20} color="#fff"/>) : (<Btn_Texto>SAIR</Btn_Texto>)
      }
     </Btn_sair>
   </Background>
  );
}