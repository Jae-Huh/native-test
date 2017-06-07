import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class App extends React.Component {
  render() {
    const puppy = {uri: 'https://s-media-cache-ak0.pinimg.com/736x/3b/3b/35/3b3b359f28443b5651e97586dd0c0bf7.jpg'}
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Puppy!</Text>
        <Image style={styles.puppyPic} source={puppy} />
      </View>
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
    width: 193,
    height: 210
  }
});
