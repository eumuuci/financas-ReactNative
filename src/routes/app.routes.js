import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../pages/Home';
import Perfil from '../pages/Perfil';
import Registrar from '../pages/Registrar';
import CustomDrawer from '../components/CustomDrawer';

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
        <AppDrawer.Navigator
        drawerContent={(props)=> <CustomDrawer {...props}/>}
        drawerStyle={{
        backgroundColor:'#171717'
        }}
        drawerContentOptions={{
            labelStyle:{
                fontSize:17,
                fontFamily:'Roboto-Regular'
            },
            activeTintColor:'#fff',
            activeBackgroundColor:'#5EBB46',
            inactiveBackgroundColor:'#0D0D0D',
            inactiveTintColor:'#4F4F4F'
        }}>
            <AppDrawer.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <AppDrawer.Screen name="Perfil" component={Perfil} options={{headerShown:false}}/>
            <AppDrawer.Screen name="Registrar" component={Registrar} options={{headerShown:false}}/>
        </AppDrawer.Navigator>
    )
}

export default AppRoutes;