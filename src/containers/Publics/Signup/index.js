import React from 'react'
import { View, StyleSheet } from 'react-native'

import { Form } from '../../../components/Signin'

const Signup = () => {

  return (
    <View>
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

export default Signup