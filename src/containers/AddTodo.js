import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import {Ionicons} from '@expo/vector-icons'

class AddTodo extends Component {

  state = {
    todos: [],
    visibilityFilter: 'SHOW_ALL_TODOS'
  }

  render() {
    return (
      <View style={{flexDirection: 'row', marginHorizontal: 20}}>
      <TextInput
      placeholder="Eg. Create new video"
      style={{backgroundColor: '#aeaeae', height: 50, flex: 1, padding: 5}}
      />
      <TouchableOpacity onPress={()=>alert("added todo")}>
      <View style={{height: 50, backgroundColor: '#aeaeae', alignItems: 'center', justifyContent: 'center'}}>
      <Ionicons name="md-add" size={30} style={{color: '#ff0000', padding: 10}}/>
      </View>
      </TouchableOpacity>
      </View>
    );
  }
}
export default AddTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
