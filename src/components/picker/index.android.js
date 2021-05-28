import React from 'react';
import { View } from 'react-native';
import {Picker as RNPickerSelect} from '@react-native-picker/picker';
import {PickerView} from './styles';

export default function picker({onChange,tipo}) {
 return (
   <PickerView>
       <RNPickerSelect
       style={{
         width:'100%',
         color:'#fff',
         fontSize:18,
         fontfamily:'Roboto-Regular'
       }}
       selectedValue={tipo}
       onValueChange={(valor)=> onChange(valor)}
       >
         <RNPickerSelect.Item label="Lucro" value="lucro"/>
         <RNPickerSelect.Item label="Despesa" value="despesa"/>      
       </RNPickerSelect>
   </PickerView>
  );
}