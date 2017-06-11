import React from 'react'
import { StyleSheet, Text, TextInput, View, Image, Button, TouchableOpacity, ScrollView, Switch } from 'react-native'

import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'
import Component4 from './Component4'
import Component5 from './Component5'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      textValue: 'Hello',
      switchValue: false
    }
  }

  onChangeText(value) {
    this.setState({
      textValue: value
    })
  }

  onSubmit() {
    console.log('Input submitted...')
  }

  onSwitchChange(val) {
      this.setState({
        switchValue: val
      })
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Hello World!</Text> */}
        <Component1 />
        <Component2 />
        <TextInput
          style={styles.textInput}
          placeholder="Enter Text"
          value={this.state.textValue}
          onChangeText={(value) => this.onChangeText(value)}
          onSubmitEditing={this.onSubmit}
        />
        <Text>{this.state.textValue}</Text>
        <Switch
          value={this.state.switchValue}
          onValueChange={(val) => this.onSwitchChange(val)}
        />
        <Component3 />
        <Component4 />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    borderWidth: 1,
    margin: 20,
    paddingHorizontal: 10
  }
});
