import React,{useContext} from 'react';
import {AuthContext} from '../contexts/auth'
import { View, ActivityIndicator } from 'react-native';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes'


function Routes(){
    const {signed, load} = useContext(AuthContext);
        if(load){
            return(
                <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator size='large' color='#5EBB46'/>
                </View>
            )
        }
    return(
        signed ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes;