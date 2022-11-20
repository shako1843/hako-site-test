import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';


export default class Item extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Text style={styles.b}>{this.props.cmd}</Text>
    )
  }
}
const styles=StyleSheet.create({
  b:{
    backgroundColor: "#202225",
    padding: 1,
    borderRadius: 2
  }
})