import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

const ButtonPrimary = props => {

  return (
    <View>
      <Button>{props.label}</Button>
    </View>
  )
}

const styles = StyleSheet.crete({})

export { ButtonPrimary }