import React, {useState} from 'react';
import { Text,Platform,TouchableOpacity,} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Background, Header} from './styles'

export default function datepicker({ date, onClose,onChange }) {
    const [dateNow,setDateNow] = useState(new Date(date))
 return (
    <Background>
        {Platform.OS ==='ios' &&(
            <Header>
             <TouchableOpacity onPress={onClose}>
              <Text>Fechark</Text>
             </TouchableOpacity>
            </Header>
        )}
        <DateTimePicker
        value={dateNow}
        mode="date"
        display="default"
        onChange={(e,d)=>{
            const currentDate = d || dateNow;
            setDateNow(currentDate);
            onChange(currentDate);
        }}
        style={{backgroundColor:'#fff'}}/>
    </Background>
  );
}