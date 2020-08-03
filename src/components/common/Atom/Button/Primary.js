import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const ButtonPrimary = props => {

  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.label}>{props.label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#00B3FF',
    borderRadius: 50
  },
  label: {
    fontSize: 20,
    color: '#FFFFFF'
  }
})

export { ButtonPrimary }