import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Form } from '../../../components/Signin'

const Signin = () => {

  return (
    <View style={styles.container}>
      <Form />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#20232A'
  }
})

export default Signin