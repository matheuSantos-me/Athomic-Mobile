import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello GUGU</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#000',
    fontSize: 30
  }
})

export default App