import React,{useState, useContext} from 'react';
import {AuthContext} from '../../contexts/auth';
import { View, Image,TextInput,TouchableOpacity,Text,ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Background,Tela_login,Texto_Titulo,Inputs,Texto_Drawer,Login_Input,Botao_login,View_btnlogin,Texto_btnTop,View_btnTop,Texto_btntopcriarconta,View_Textosbtn,Texto_Botao,Header} from './styles';
import Feather from 'react-native-vector-icons/Feather';


export default function Register() {
    const navegacao = useNavigation();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [nome,setNome] = useState('')
    const { cadastrar, loadingAuth } = useContext(AuthContext)

      function criarconta(){
      cadastrar(email,password,nome)
    }
 return (
   <Background>
     <Header>
     <TouchableOpacity onPress={()=> navegacao.goBack()}>
     <Feather name="corner-up-left" size={40} color="#5EBB46"/>
     </TouchableOpacity>
     <Texto_Titulo>Criar Conta</Texto_Titulo>
     </Header>
     <Tela_login>
     <Inputs>
      <Feather name="user" size={20} color="#4F4F4F"/>
      <Login_Input
      placeholder='Nome'
      placeholderTextColor='#4F4F4F'
      onChangeText={(texto)=>setNome(texto)}
      value={nome}
      />
      </Inputs>

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
      />
      </Inputs>
    <Image
      source={require('../../img/ilustration.png')}
      style={{width:300, height:200,marginTop:10,marginRight:50}}/>
     </Tela_login>

     <Image
      source={require('../../img/login.png')}
      style={{width:'100%', height:170,marginTop:-15,}}/>
      
    <View_btnlogin>
    <Botao_login onPress={criarconta}>
      {
        loadingAuth ? (<ActivityIndicator size={20} color="#fff"/>) : (<Texto_Botao>CADASTRAR</Texto_Botao>)
      }
    </Botao_login>
    </View_btnlogin>
   </Background>
  );
}