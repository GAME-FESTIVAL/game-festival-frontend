import { useEffect, useState, useRef } from 'react'
import { formatPhoneNumber } from '@common/utils'
import { defaultValidRules } from '@common/constants'

type ValidTypesType = 'name' | 'email' | 'phoneNumber' | 'birth' | 'password'

type FormHandlerEventType = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>

type FormType = {
  [key: string]: unknown
}

type RuleType = {
  [key: string]: {
    exp: RegExp
    placeholder: string
    errorMessage: string
  }
}

type DataSetType = {
  type: string
  value?: string
  rule: ValidTypesType
  match: keyof FormType
}

type AttributesOptionsType = {
  rule?: ValidTypesType
  match?: keyof FormType
  type?: string
  value?: unknown
  required?: boolean
  classNames?: string
  onChange?: (e?: FormHandlerEventType) => void
}

export const useFormHandler = (
  data: FormType = {},
  rules: RuleType = defaultValidRules
) => {
  const [form, setForm] = useState<FormType>(data)
  const [validItems, setValidItems] = useState<
    Partial<Record<keyof FormType, boolean>>
  >({})
  const [requiredItems, setRequiredItems] = useState<(keyof FormType)[]>([])
  const validItemsRef = useRef<Record<keyof FormType, boolean>>({})
  const requiredItemsRef = useRef<(keyof FormType)[]>([])

  const formHandler: (e: FormHandlerEventType) => void = (e) => {
    const name = e.target.dataset.name as keyof FormType
    const { type, rule, value, match } = e.target.dataset as DataSetType
    let newValue: string | number | unknown[] = value || e.target.value
    switch (type) {
      case 'number':
        newValue = Number(newValue.replace(/[^0-9]/g, ''))
        break
      case 'phoneNumber':
        newValue = formatPhoneNumber(newValue)
        break
      case 'array':
        const propCopy = form[name] ? [...(form[name] as unknown[])] : []
        if (propCopy.includes(newValue)) {
          newValue = propCopy.filter((element) => element !== newValue)
        } else newValue = [...propCopy, newValue]
        break
    }
    setForm({ ...form, [name]: newValue })
    if ((rule || match) && typeof newValue === 'string') {
      const isMatchValid = !match || form[match] === newValue
      const isRuleValid = !rule || rules[rule].exp.test(newValue)
      setValidItems({
        ...validItems,
        [name]: !newValue || (isRuleValid && isMatchValid),
      })
    }
  }

  const attributes = <ValueType = string>(
    fieldName: keyof FormType,
    options?: AttributesOptionsType
  ) => {
    const name = fieldName as string
    const value = (form[name] || '') as ValueType
    const { rule, match, type, classNames, required } = options ?? {}
    const onChange = options?.onChange || formHandler
    const errorClass = rule && !validItems[name] ? ' error' : ''
    const className = (classNames || '') + errorClass
    const placeholder = rule && rules[rule].placeholder
    if (required) requiredItemsRef.current.push(name)
    if (rule || match) validItemsRef.current[name] = true
    return {
      'data-name': name,
      'data-rule': rule,
      'data-match': match,
      'data-type': type,
      'data-value': options?.value,
      ...{ name, value, className, onChange, placeholder },
    }
  }

  const getField = (fieldName: keyof FormType) => {
    return form[fieldName]
  }

  const setField = (setData: Record<keyof FormType, unknown>) => {
    setForm({ ...form, ...setData })
  }

  const isSubmitting = () => {
    const isisValidPass = Object.values(validItems).every((value) => value)
    const isFormFilled = requiredItems.every((key: keyof FormType) =>
      Array.isArray(form[key]) ? form[key][0] : form[key]
    )
    return isisValidPass && isFormFilled
  }

  useEffect(() => {
    setValidItems(validItemsRef.current)
    setRequiredItems(Array.from(new Set(requiredItemsRef.current)))
  }, [])

  return {
    form,
    setForm,
    getField,
    setField,
    attributes,
    validItems,
    isSubmitting,
  }
}
