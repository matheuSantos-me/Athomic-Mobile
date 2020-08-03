import React from 'react'
import { View } from 'react-native'

import { InputPrimary, ButtonPrimary, ButtonSecondary } from '../common'

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
        label="CADASTRAR"
      />
    </View>
  )
}

export { Form }