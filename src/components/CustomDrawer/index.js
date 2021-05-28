import React from 'react';
import { View,Text } from 'react-native';
import {DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer';

export default function CustomDrawer(props) {
 return (
   <DrawerContentScrollView>
       <View>
        <Text style={{fontSize:24, color:'#5EBB46',textAlign:'center'}}>Finanças App</Text>
       </View>
    <DrawerItemList {...props}/>
   </DrawerContentScrollView>
  );
}