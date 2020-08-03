import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const InputPrimary = props => {

  return (
    <TextInput
      placeholder={props.placeholder}
      placeholderTextColor="#000"
      style={[ styles.input, { ...props.style }]}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    backgroundColor: '#FFFFFF'
  }
})

export { InputPrimary }