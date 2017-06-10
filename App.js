import React from 'react'
import { StyleSheet, Text, TextInput, View, Image, Button, TouchableOpacity, ScrollView } from 'react-native'

export default class App extends React.Component {
  render() {
    const puppy = {uri: 'https://s-media-cache-ak0.pinimg.com/736x/3b/3b/35/3b3b359f28443b5651e97586dd0c0bf7.jpg'}
    return (
      <ScrollView maximumZoomScale={2}>
        <View style={styles.container}>
          <TextInput placeholder="Text input field" style={styles.textInput}/>
          <Text style={styles.titleText}>Puppy!</Text>
          <Image style={styles.puppyPic} source={puppy} />
          <Button title="Button" onPress={() => alert('Just a Button')} />
          <TouchableOpacity onPress={() => alert('TouchableOpacity')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableOpacity</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.innerContainer}>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFEA',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'pink',
    backgroundColor: 'purple',
    padding: 10
  },
  puppyPic: {
    width: 80,
    height: 80
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    margin: 20,
    paddingHorizontal: 10
  },
  button: {
    marginBottom: 20,
    width: 200,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  },
  innerContainer: {
    flexDirection: 'row'
  }
});
