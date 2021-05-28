import React, {useState, useContext, useEffect} from 'react';
import { Alert,Platform,Touchable,TouchableOpacity } from 'react-native';
import Header from '../../components/header';
import {Background,Container,Nome,Saldo,Title,List,Area} from './styles'
import {AuthContext} from '../../contexts/auth';
import HistoricoL from '../../components/HistoricoL';
import firebase from '../../services/firebaseConnection';
import { format, isPast } from 'date-fns';
import Feather from 'react-native-vector-icons/Feather';
import Datepicker from '../../components/datepicker';

export default function home() {
    const {user} =useContext(AuthContext);
    const [historico,setHistorico] =useState([]);
    const [saldo,setSaldo] = useState(0);
    const uid = user && user.uid;
    const [newDate,setNewDate] = useState(new Date())
    const [show,setShow] = useState(false)

    useEffect(()=>{
      async function loadlist(){
        await firebase.database().ref('users').child(uid).on('value', (snapshot)=>{
          setSaldo(snapshot.val().saldo);
        });
        await firebase.database().ref('historico').child(uid).orderByChild('date')
        .equalTo(format(newDate, 'dd/MM/yy')).limitToLast(10).on('value', (snapshot)=>{
          setHistorico([]);

          snapshot.forEach((childItem)=>{
            let list ={
              key: childItem.key,
              tipo: childItem.val().tipo,
              valor: childItem.val().valor,
              date: childItem.val().date,
            }
            setHistorico(oldArray => [...oldArray, list].reverse())
          })
        })
      }
      loadlist()
    },[newDate])

    function deletar_item(data){
      Alert.alert(
        'Aviso!',
        `Você tem certeza que quer excluir ${data.tipo} - ${data.valor}?`,
        [
          {
            text:'Cancelar',
            style: 'cancel'
          },
          {
            text:'Confirmar',
            onPress: ()=> deletaritemsucesso(data)
          }
        ]
      )
    }
    async function deletaritemsucesso(data){

      await firebase.database().ref('historico').child(uid).child(data.key).remove()
      .then(async()=>{
        let saldoAtual = saldo;
        data.tipo === 'despesa' ? saldoAtual += parseFloat(data.valor) : saldoAtual -= parseFloat(data.valor);
        await firebase.database().ref('users').child(uid).child('saldo').set(saldoAtual);
      })
      .catch((error)=>{
        console.log(error)
      })
    }

    function mostrar_calendario(){
      setShow(true)
    }
    function fechar_calendario(){
      setShow(false)
    }
    const onChange = (date)=>{
      setShow(Platform.OS === 'ios');
      setNewDate(date);
    }
 return (
   <Background>
     <Header/>
     <Container>
       <Nome>{user && user.nome}</Nome>
       <Saldo>R${saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Saldo>
     </Container>
     <Area>
      <TouchableOpacity onPress={mostrar_calendario}>
        <Feather name="calendar" color="#fff" size={30}/>
      </TouchableOpacity>
      <Title>Ultimas Movimentações</Title>
     </Area>
     <List
     showsVerticalScrollIndicator={false}
     data={historico}
     keyExtrator={item => item.key}
     renderItem={({item})=> (<HistoricoL data={item} deletitem={deletar_item}/>)}/>
     {
       show &&(
         <Datepicker
         onClose={fechar_calendario}
         date={newDate}
         onChange={onChange}/>
       )
     }
   </Background>
  );
}