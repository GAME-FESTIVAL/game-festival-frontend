import { format, DateArg, FormatOptions } from 'date-fns'

export const formatDate = (
  date: (DateArg<Date> & {}) | undefined,
  formatStr: string,
  options?: FormatOptions
) => {
  if (!date) return
  return format(date, formatStr, options)
}
