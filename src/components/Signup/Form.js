import React from 'react'
import { View } from 'react-native'

const Form = () => {

  return (
    <View>
      <InputPrimary
        placeholder="Email"
        style={{ marginBottom: 30 }}
      />

      <InputPrimary
        placeholder="Email"
        style={{ marginBottom: 30 }}
      />
      
      <ButtonPrimary
        label="ENTRAR"
      />

      <ButtonSecondary
        label="CANCELAR"
      />
    </View>
  )
}

export { Form }