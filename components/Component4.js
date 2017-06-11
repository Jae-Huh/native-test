import React from 'react'
import { StyleSheet, Text, View , ListView, TouchableHighlight } from 'react-native'

export default class Component4 extends React.Component {
  constructor() {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      userDataSource: ds
    }
  }

  componentDidMount() {
    this.fetchUsers()
  }

  fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(response => {
        this.setState({
          userDataSource: this.state.userDataSource.cloneWithRows(response)
        })
      })
  }

  renderRow(user, sectionId, rowId, highlightRow) {
    return(
      <TouchableHighlight>
        <View style={styles.row}>
          <Text style={styles.rowText}>{user.name}: {user.email}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <ListView
        dataSource={this.state.userDataSource}
        renderRow={this.renderRow.bind(this)}
      />
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f4f4f4',
    marginBottom: 3
  },
  rowText: {
    flex: 1
  }
});
