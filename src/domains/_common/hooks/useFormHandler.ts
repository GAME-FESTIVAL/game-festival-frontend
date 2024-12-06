import { useEffect, useState, useRef } from 'react'
import { formatPhoneNumber, tryParseJson } from '@common/utils'

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
    placeholder?: string
    errorMessage?: string
  }
}

type DataSetType = {
  name: string
  type: string
  value?: string
  rule?: ValidTypesType
  match?: keyof FormType
  reset?: keyof FormType
  resetValue?: string
}

type AttributesOptionsType = {
  rule?: ValidTypesType
  match?: keyof FormType
  type?: string
  value?: unknown
  required?: boolean
  reset?: keyof FormType
  resetValue?: string
  errorStyle?: Record<string, string>
  classNames?: string
  onChange?: (e?: FormHandlerEventType) => void
}

export const useFormHandler = (data: FormType = {}, rules?: RuleType) => {
  const [form, setForm] = useState<FormType>(data)
  const [validItems, setValidItems] = useState<
    Partial<Record<keyof FormType, boolean>>
  >({})
  const [requiredItems, setRequiredItems] = useState<(keyof FormType)[]>([])
  const validItemsRef = useRef<Record<keyof FormType, boolean>>({})
  const requiredItemsRef = useRef<(keyof FormType)[]>([])
  const inputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({})

  const defaultFormHandler: (e: FormHandlerEventType) => void = (e) => {
    const dataset = e.target.dataset as DataSetType
    const { name, type, rule, value, match, reset, resetValue } = dataset
    const newValue = value || e.target.value
    const updateForm = { ...form }
    switch (type) {
      case 'number':
        updateForm[name] = Number(newValue.replace(/[^0-9]/g, ''))
        break
      case 'phoneNumber':
        updateForm[name] = formatPhoneNumber(newValue)
        break
      case 'array':
      case 'checkbox':
        if (!Array.isArray(form[name])) break
        const copy = form[name] ? [...form[name]] : []
        if (copy.includes(newValue)) {
          updateForm[name] = copy.filter((element) => element !== newValue)
        } else updateForm[name] = [...copy, newValue]
        break
      default: {
        updateForm[name] = tryParseJson(newValue)
      }
    }

    if (reset) {
      const fieldType = typeof form[reset]
      const isArray = Array.isArray(form[reset])
      const resetValueType = resetValue ? 'provided' : fieldType
      switch (resetValueType) {
        case 'provided': {
          updateForm[name] = tryParseJson(resetValue)
          break
        }
        case 'string': {
          updateForm[reset] = ''
          break
        }
        case 'number': {
          updateForm[reset] = 0
          break
        }
        case 'boolean': {
          updateForm[reset] = false
          break
        }
        case 'object': {
          if (isArray) updateForm[reset] = []
          else updateForm[reset] = {}
          break
        }
        default: {
          updateForm[reset] = undefined
        }
      }
    }

    if (validItems) {
      const updateValidItems = { ...validItems }
      Object.keys(validItems).forEach((key) => {
        const value = updateForm[key] as string
        const isMatchValid = !match || form[match] === value
        const isRuleValid = !rules || !rule || rules[rule].exp.test(value)
        updateValidItems[key] = !value || (isRuleValid && isMatchValid)
      })
      setValidItems(updateValidItems)
    }

    setForm(updateForm)
  }

  const attributes = <ValueType = string>(
    fieldName: keyof FormType,
    options?: AttributesOptionsType
  ) => {
    const name = fieldName as string
    const value = (form[name] || '') as ValueType
    const { rule, match, type, reset, resetValue } = options ?? {}
    const onChange = options?.onChange || defaultFormHandler
    const isValid = rule || match
    const errorClass = isValid && !validItems[name] ? ' valid-error' : ''
    const className = (options?.classNames || '') + errorClass
    const placeholder = rules && rule && rules[rule].placeholder
    const style = (errorClass && options?.errorStyle) || {}
    const ref = (el: HTMLInputElement) => (inputRefs.current[name] = el)
    if (options?.required) requiredItemsRef.current.push(name)
    if (isValid) validItemsRef.current[name] = true

    return {
      ref,
      style,
      'data-name': name,
      'data-rule': rule,
      'data-reset': reset,
      'data-reset-value': resetValue,
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

  const isSubmitting = (
    callback?: (
      validItems: Partial<Record<keyof FormType, boolean>>,
      requiredItems: (keyof FormType)[]
    ) => void
  ) => {
    const isisValidPass = Object.values(validItems).every((value) => value)
    const isFormFilled = requiredItems.every((key: keyof FormType) =>
      Array.isArray(form[key]) ? form[key][0] : form[key]
    )
    if (callback) callback(validItems, requiredItems)
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
    isSubmitting,
    validItems,
    requiredItems,
    inputRefs,
  }
}
