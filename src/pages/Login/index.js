import React,{useState, useContext} from 'react';
import { View, Image,TextInput,TouchableOpacity,Text, Touchable,ActivityIndicator } from 'react-native';
import {useNavigation,} from '@react-navigation/native';
import {Background,Tela_login,Texto_Titulo,Inputs,Login_Input,Botao_login,View_btnlogin,Texto_btnTop,View_btnTop,Texto_btntopcriarconta,View_Textosbtn,Texto_Botao} from './styles';
import Feather from 'react-native-vector-icons/Feather';
import {AuthContext} from '../../contexts/auth';


export default function Login() {
    const navegacao = useNavigation();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const { fazerlogin,loadingAuth } = useContext(AuthContext)

    async function logar(){
      fazerlogin(email,password)
    }
 return (
   <Background>
     <Tela_login>
     <Image
      source={require('../../img/Logo.png')}
      style={{width:210, height:170,marginTop:50}}/>
      <Texto_Titulo>Finanças App</Texto_Titulo>
      <Inputs>
      <Feather name="mail" size={20} color="#4F4F4F"/>
      <Login_Input
      placeholder='Email'
      placeholderTextColor='#4F4F4F'
      onChangeText={(texto)=>setEmail(texto)}
      value={email}

      />
      </Inputs>

      <Inputs>
      <Feather name="lock" size={20} color="#4F4F4F"/>
      <Login_Input
      placeholder='Senha'
      placeholderTextColor='#4F4F4F'
      onChangeText={(texto)=>setPassword(texto)}
      value={password}
      secureTextEntry={true}
      />
      </Inputs>
     </Tela_login>

     <Image
      source={require('../../img/login.png')}
      style={{width:'100%', height:170,marginTop:-15}}/>
      
    <View_Textosbtn>
    <Texto_btnTop>Não tem uma conta?</Texto_btnTop>
    <TouchableOpacity onPress={()=> navegacao.navigate('Register')}>
    <Texto_btntopcriarconta>Criar Conta</Texto_btntopcriarconta>
    </TouchableOpacity>
    </View_Textosbtn>

    <View_btnlogin>
    <Botao_login onPress={logar}>
      {
        loadingAuth ? (<ActivityIndicator size={20} color="#fff"/>) : (<Texto_Botao>ACESSAR</Texto_Botao>)
      }
    </Botao_login>
    </View_btnlogin>
   </Background>
  );
}