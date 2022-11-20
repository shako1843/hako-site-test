import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default class Link extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <TouchableOpacity onPress={this.props.onPress} style={this.props.btnStyle}>
        <Text style={this.props.textStyle}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}