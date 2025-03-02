import { useForm } from 'react-hook-form'
import { formFieldConfig } from '@common/constants'

export const useJoinForm = () => {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      password: '',
      password_confirm: '',
      gender: 'male',
      interest: [],
    },
  })

  const { register, trigger } = methods

  const { name, password, password_confirm } = formFieldConfig

  const registers = {
    name: {
      placeholder: name.placeholder,
      ...register('name', name.registerOptions),
    },

    password: {
      placeholder: password.placeholder,
      ...register('password', {
        ...password.registerOptions,
        onChange: () => trigger('password_confirm'),
      }),
    },

    password_confirm: {
      placeholder: password_confirm.placeholder,
      ...register('password_confirm', {
        ...password_confirm.registerOptions,
        validate: (value, formValues) =>
          value === formValues.password || password_confirm.messages.default,
      }),
    },

    gender: register('gender'),

    interest: register('interest'),
  }

  return { methods, registers }
}
