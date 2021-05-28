import React, {useState, useContext} from 'react';
import {Background,Input_valor,Registrar_button,Texto_button} from './styles'
import { SafeAreaView,TouchableWithoutFeedback,Keyboard,Alert} from 'react-native';
import { format } from 'date-fns'
import Header from '../../components/header';
import Picker from '../../components/picker';
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../contexts/auth';
import firebase from '../../services/firebaseConnection'

export default function Registrar() {
  const [valor,setValor] = useState('');
  const [tipo,setTipo]= useState('lucro');
  const navigation = useNavigation();
  const {user: usuario} = useContext(AuthContext)

  function registrar_gastos(){
    Keyboard.dismiss();
    if(isNaN(parseFloat(valor)) || tipo === null){
      alert('preencha todos os campos!');
      return;
    }
    Alert.alert(
      'confirmando dados',
      `Tipo: ${tipo} - valor:${parseFloat(valor)}`,
      [
        {
          text:'Cancelar',
          style: 'cancel'
        },
        {
          text:'Continuar',
          onPress: () => registrar_add()
        }
      ]
    )
  }

  async function registrar_add(){
    let uid= usuario.uid;

      let key= await firebase.database().ref('historico').child(uid).push().key
      await firebase.database().ref('historico').child(uid).child(key).set({
        tipo: tipo,
        valor: parseFloat(valor),
        date: format(new Date(), 'dd/MM/yy')
      })

      let user = firebase.database().ref('users').child(uid);
      await user.once('value').then((snapshot)=>{
        let saldo = parseFloat(snapshot.val().saldo);

        tipo === 'despesa' ? saldo -= parseFloat(valor) : saldo += parseFloat(valor)
          user.child('saldo').set(saldo)
      })
      setValor('');
      Keyboard.dismiss();
      navigation.navigate('Home')
  }
    
 return (
   <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
   <Background>
     <Header/>
     <SafeAreaView style={{alignItems:'center'}}>
      <Input_valor
      placeholder="Digite o valor desejado"
      placeholderTextColor="#fff"
      keyboardType="numeric"
      returnKeyType="next"
      onSubmitEditing={()=>Keyboard.dismiss()}
      value={valor}
      onChangeText={(texto)=> setValor(texto)}/>
      <Picker onChange={setTipo} tipo={tipo}/>

      <Registrar_button onPress={registrar_gastos}>
        <Texto_button>REGISTRAR</Texto_button>
      </Registrar_button>
     </SafeAreaView>
   </Background>
   </TouchableWithoutFeedback>
  );
}