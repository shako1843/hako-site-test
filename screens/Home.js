import React from 'react';
import {View,Text, SafeAreaView, Platform, StatusBar, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import Link from '../components/Link';
import Btn from '../components/Btn';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

export default class Home extends React.Component{
  constructor(props){
    super(props);
  }
  goTo=(route)=>{
    this.props.navigation.navigate(route)
  }
  render(){
    return(
      <View style={styles.container}>
        <SafeAreaView style={styles.androidsafearea}/>
        <View style={styles.title}>
          <Text style={styles.titleH1}>Hako Bot</Text>
          <Text style={styles.titleH2}>Moderação, Utilidade, Diversão, Ticket, Economia</Text>
          <Text style={styles.titleH2}>Bot LGBTI+</Text>
          <Text style={styles.titleH2}>Criador: s.hako#1843</Text>
        </View>
        <View style={styles.links}>
          <Btn text={"Comandos"} onPress={()=>this.goTo("Commands")} btnStyle={{width: "80%"}} textStyle={styles.btnTextLink}/>
          <Btn text={"API"} onPress={()=>this.goTo("API")} btnStyle={styles.btnLink} textStyle={styles.btnTextLink}/>
          <Btn text={"Ação LGBTI+"} onPress={()=>this.goTo("Lgbti")} btnStyle={styles.btnLink} textStyle={styles.btnTextLink}/>
          <Btn text={"Add"} onPress={()=>this.goTo("Add")} btnStyle={styles.btnLink} textStyle={styles.btnTextLink}/>
          <Btn text={"Discord"} onPress={()=>this.goTo("Discord")} btnStyle={styles.btnLink} textStyle={styles.btnTextLink}/>
        </View>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#212529"
  },
  androidsafearea:{
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  title:{
    flex: 0.35,
    textAlign: "center"
  },
  titleH1:{
    fontSize: RFValue(50),
    color: "#59457a"
  },
  titleH2:{
    color: "#a5fbca",
    padding: 2,
    fontSize: RFValue(22)
  },
  links:{
    flex: 0.65,
    alignItems: "center",
    paddingTop: 20,
    marginBottom: RFValue(35)
  },
  btnLink:{
    marginTop: RFValue(8),
    width: "80%"
  },
  btnTextLink:{
    color: "white"
  }
});