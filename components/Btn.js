import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';


export default class Btn extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <TouchableOpacity onPress={this.props.onPress} style={[styles.btn,this.props.btnStyle]}>
        <Text style={[styles.text,this.props.textStyle]}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}
const styles=StyleSheet.create({
  btn:{
    width: RFValue(180),
    height: RFValue(60),
    padding: 14,
    borderWidth: 6,
    borderColor: "#a5fbca",
    borderRadius: 5,
    justifyContent: "center"
  },
  text:{
    textAlign: "center",
    fontSize: 22,
    color: "black"
  }
})