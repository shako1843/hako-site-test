import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';

import Home from '../screens/Home';
import Commands from '../screens/Commands';

const Tab=createMaterialBottomTabNavigator();

const TabNav=()=>{
  return(
    <Tab.Navigator
      barStyle={styles.bottomTabStyles}
      labeled={false}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if(route.name==="Home"){
            iconName=focused?"home":"home-outline";
          }else if(route.name==="Commands"){
            iconName=focused?"code-slash":"code-slash-outline";
          }
          return <Ionicons name={iconName} size={RFValue(20)} color={color} style={styles.icons}/>
        }
      })}
      tabBarOptions={{
        activeTintColor: "#715c97",
        inactiveTintColor: "#59457a"
      }}
    >
      <Tab.Screen name={"Commands"} component={Commands}/>
      <Tab.Screen name={"Home"} component={Home}/>
    </Tab.Navigator>
  );
}

const styles=StyleSheet.create({
  bottomTabStyles:{
    backgroundColor: "#715c97",
    height: "8%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
    position: "absolute"
  },
  icons:{
    width: RFValue(30),
    height: RFValue(30)
  }
})

export default TabNav;