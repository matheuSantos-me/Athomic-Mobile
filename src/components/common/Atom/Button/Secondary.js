import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

const ButtonSecondary = props => {

  return (
    <View>
      <Button>{props.label}</Button>
    </View>
  )
}

const styles = StyleSheet.crete({})

export { ButtonSecondary }