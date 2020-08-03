import React from 'react'
import { View, StyleSheet } from 'react-native'

const Content = props => {

  return (
    <View style={styles.container}>{props.children}</View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  }
})

export { Content }