import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const ButtonSecondary = props => {

  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.label}>{props.label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00B3FF',
    borderRadius: 50
  },
  label: {
    color: '#00B3FF'
  }
})

export { ButtonSecondary }