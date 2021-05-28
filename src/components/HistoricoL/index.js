import React from 'react';
import {TouchableWithoutFeedback} from 'react-native'
import { Background, Tipo,Iconview,ValorText,TipoText,DataText } from './styles';
import Feather from 'react-native-vector-icons/Feather';

export default function HistoricoL({data,deletitem}) {
 return (
   <TouchableWithoutFeedback onLongPress={ ()=> deletitem(data)}>
  <Background>
    <Tipo>
      <Iconview tipo={data.tipo}>
        <Feather name={data.tipo === 'despesa' ? 'arrow-down' : 'arrow-up'} size={20} color="#fff"/>
        <TipoText>{data.tipo}</TipoText>
        <ValorText tipo={data.tipo}>R${data.valor} |</ValorText>
        <DataText>{data.date}</DataText>
      </Iconview>
    </Tipo>
  </Background>
  </TouchableWithoutFeedback>
  );
}