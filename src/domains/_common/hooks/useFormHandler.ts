import { useEffect, useState, useRef } from 'react'
import { formatPhoneNumber } from '@common/utils'
import { validRules } from '@common/constants'

type ValidTypesType = 'name' | 'email' | 'phoneNumber' | 'birth'

type FormHandlerEventType = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>

type DataSetType = {
  type: string
  value?: string
  rule: ValidTypesType
}

export const useFormHandler = <T>(data: Partial<T> = {}) => {
  const [form, setForm] = useState<Partial<T>>(data)
  const [validItems, setValidItems] = useState<
    Partial<Record<keyof T, boolean>>
  >({})
  const [requiredItems, setRequiredItems] = useState<(keyof T)[]>([])
  const validItemsRef = useRef({})
  const requiredItemsRef = useRef<(keyof T)[]>([])

  const formHandler: (e: FormHandlerEventType) => void = (e) => {
    const name = (e.target.name || e.target.dataset.name) as keyof T
    const { type, rule, value } = e.target.dataset as DataSetType
    let newValue: string | number | unknown[] = value || e.target.value
    switch (type) {
      case 'number': {
        newValue = Number(newValue.replace(/[^0-9]/g, ''))
        break
      }
      case 'phoneNumber': {
        newValue = formatPhoneNumber(newValue)
        break
      }
      case 'array': {
        const propCopy = form[name] ? [...(form[name] as unknown[])] : []
        if (propCopy.includes(newValue)) {
          newValue = propCopy.filter((element) => element !== newValue)
        } else newValue = [...propCopy, newValue]
        break
      }
    }
    setForm({ ...form, [name]: newValue })
    if (rule) {
      const result = validRules[rule].exp.test(newValue as string)
      setValidItems({ ...validItems, [name]: !newValue || result })
    }
  }

  type AttributesOptionsType = {
    rule?: ValidTypesType
    type?: string
    value?: unknown
    required?: boolean
    classNames?: string
  }

  const attributes = (name: keyof T, options?: AttributesOptionsType) => {
    const { rule, type, value, classNames, required } = options ?? {}
    const curretnValue = form[name] || ''
    const onChange = formHandler
    const errorClass = rule && !validItems[name] ? ' error' : ''
    const className = (classNames || '') + errorClass
    if (required) requiredItemsRef.current.push(name)
    if (rule) {
      validItemsRef.current = {
        ...validItemsRef.current,
        [name]: true,
      }
    }
    return {
      ...{ name, value: curretnValue, className, onChange },
      placeholder: rule && validRules[rule].placeholder,
      'data-name': name,
      'data-rule': rule || null,
      'data-type': type || null,
      'data-value': value || null,
    }
  }

  const isSubmitting = () => {
    const isEmpty = requiredItems.every((key: keyof T) =>
      Array.isArray(form[key]) ? form[key][0] : form[key]
    )
    const isValid = Object.values(validItems).every((value) => value)
    return isEmpty && isValid
  }

  useEffect(() => {
    setValidItems(validItemsRef.current)
    setRequiredItems(Array.from(new Set(requiredItemsRef.current)))
  }, [])

  return { form, setForm, attributes, validItems, isSubmitting }
}
