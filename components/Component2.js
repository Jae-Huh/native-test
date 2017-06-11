import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native'

export default class Component2 extends React.Component {
  onPress() {
    console.log('Area1 Pressed')
  }

  onPress2() {
    console.log('Area2 Pressed')
  }

  render() {
    return (
      <View>
        <View style={styles.com2View}>
          <Text style={styles.com2Text}>Hello Jae</Text>
        </View>
        <View style={styles.com2Container}>
          <TouchableHighlight style={styles.v1} onPress={this.onPress} underlayColor='green'>
            <View>
              <Text>View1</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity style={styles.v2} onPress={this.onPress2}>
            <View>
              <Text style={styles.vText}>View2</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.v3}>
            <Text>View3</Text>
          </View>
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  com2View: {
    backgroundColor: 'yellow'
  },
  com2Text: {
    color: 'red'
  },
  com2Container: {
    flexDirection: 'row',
    height: 100
  },
  v1: {
    flex: 1,
    backgroundColor: 'pink',
    padding: 10
  },
  v2: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 10
  },
  v3: {
    flex: 1,
    backgroundColor: 'orange',
    padding: 10
  },
  vText: {
    color: 'white'
  }
})
