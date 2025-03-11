export const formatPhoneNumber = (value: number | string) => {
  if (!value) return ''
  if (typeof value === 'number') value = value.toString()
  return value
    .replace(/[^0-9]/g, '')
    .replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3')
}
