import React from 'react';
import {View, Text} from 'react-native'
import estilo from './estilo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Feather'

import { Feed } from '../Feed/';
import { Noticias } from '../Noticias/';

const NavegacaoTabs = createBottomTabNavigator();

const Inicio = ({route, navigation}) => {
    return (
        <NavegacaoTabs.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
        
              switch (route.name) {
                  case 'Feed':
                  iconName = 'home';
                  break;
                  case 'Noticias':
                  iconName = 'mail';
                  break;
                default:
                  iconName = 'circle';
                  break;
              }
        
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#3498db',
            inactiveTintColor: '#777',
            showLabel: false
          }}  
        >  
            <NavegacaoTabs.Screen name="Feed" component={Feed} navigation={navigation} options={{ title: 'Página de feed' }} />
            <NavegacaoTabs.Screen name="Noticias" component={Noticias} options={{ title: 'Noticias' }}/>
        </NavegacaoTabs.Navigator>
    )
}

export default Inicio