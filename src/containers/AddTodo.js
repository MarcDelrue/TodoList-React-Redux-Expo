import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import {Ionicons} from '@expo/vector-icons'
import {connect} from 'react-redux'
import {addTodo} from '../actions'
class AddTodo extends Component {

  state = {
    text: ''
  }

  addTodo = (text) =>{
    this.props.dispatch(addTodo(text))
    this.setState({text: ''})
  }

  render() {
    return (
      <View style={{flexDirection: 'row', marginHorizontal: 20}}>
      <TextInput
        onChangeText={(text)=>this.setState({ text })}
        value = {this.state.text}
      placeholder="Eg. Create new video"
      style={{backgroundColor: '#aeaeae', height: 50, flex: 1, padding: 5}}
      />
    <TouchableOpacity onPress={()=>this.addTodo(this.state.text)}>
      <View style={{height: 50, backgroundColor: '#aeaeae', alignItems: 'center', justifyContent: 'center'}}>
      <Ionicons name="md-add" size={30} style={{color: '#ff0000', padding: 10}}/>
      </View>
      </TouchableOpacity>
      </View>
    );
  }
}
export default connect()(AddTodo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
