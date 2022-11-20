import React from 'react';
import {View, Text, SafeAreaView, Platform, StatusBar, ScrollView, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {SelectList} from 'react-native-dropdown-select-list';

import Btn from '../components/Btn';

const Commands=({navigation})=>{
  const [selected, setSelected] = React.useState("");
  const data=require("../commands.json");

  return(
    <View style={styles.container}>
      <SafeAreaView style={styles.androidsafearea}/>
      <View style={styles.title}>
        <Text style={styles.titleH1}>Comandos</Text>
        <Btn
          text={"Home"}
          onPress={()=>navigation.navigate("Home")}
          btnStyle={styles.btnStyleH2}
          textStyle={styles.textStyleH2}
        />
      </View>
      <View style={styles.list}>
        <SelectList
          setSelected={setSelected}
          data={data}
          placeholder={"Meus comandos"}
          searchPlaceholder={"Pesquisar"}
          dropdownTextStyles={{backgroundColor:"white"}}
        />
        <Text style={styles.textDropdown}>{selected}</Text>
      </View>
    </View>
  )
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
    flex: 0.25,
    textAlign: "center"
  },
  titleH1:{
    fontSize: RFValue(50),
    color: "#59457a"
  },
  btnStyleH2:{
    color: "#a50bca",
    padding: 2,
    fontSize: RFValue(22),
    alignSelf: "center",
    height: 50,
    marginTop: 6
  },
  textStyleH2:{
    color: "white"
  },
  list:{
    flex: 0.75,
    paddingTop: 20,
    paddingHorizontal: 20,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#36393f",
    color: "white"
  },
  textDropdown:{
    position: "relative",
    marginTop: 20,
    fontSize: RFValue(18)
  },
  drop:{
    backgroundColor: "red"
  }
});

export default Commands;