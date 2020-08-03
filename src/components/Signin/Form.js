import React from 'react'
import { ScrollView } from 'react-native'

import { InputPrimary, ButtonPrimary, ButtonSecondary } from '../common'

const Form = () => {

  return (
    <ScrollView>
      <InputPrimary
        placeholder="CNPJ"
        style={{ marginBottom: 30 }}
      />

      <InputPrimary
        placeholder="Razão Social"
        style={{ marginBottom: 30 }}
      />

      <InputPrimary
        placeholder="Nome"
        style={{ marginBottom: 30 }}
      />

      <InputPrimary
        placeholder="CPF"
        style={{ marginBottom: 30 }}
      />

      <InputPrimary
        placeholder="Email"
        style={{ marginBottom: 30 }}
      />

      <InputPrimary
        placeholder="Confirmar Email"
        style={{ marginBottom: 30 }}
      />

      <InputPrimary
        placeholder="Senha"
        style={{ marginBottom: 30 }}
      />

      <InputPrimary
        placeholder="Confirmar Senha"
        style={{ marginBottom: 30 }}
      />
      
      <ButtonPrimary
        label="ENTRAR"
      />
      
      <ButtonSecondary
        label="CADASTRAR"
      />
    </ScrollView>
  )
}

export { Form }