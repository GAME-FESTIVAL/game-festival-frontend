import axios, { AxiosRequestConfig, AxiosError } from 'axios'
import { config, messages } from '@common/constants'

type AxiosOptionsType<T> = AxiosRequestConfig & {
  processor?: (data: unknown) => T
  messages?: { [status: number]: string }
  disabledAlert?: boolean
  messageOnly?: boolean
}

const apiClient = axios.create({
  baseURL: config.SERVER_URL,
  withCredentials: true,
})

apiClient.interceptors.request.use(
  (request) => request,
  (error) => errorNotify(error)
)

apiClient.interceptors.response.use(
  (response) => response,
  (error) => errorNotify(error)
)

export const requestAPI = async <ResponseData>(
  url: string,
  options: AxiosOptionsType<ResponseData>
): Promise<ResponseData> => {
  const res = await apiClient.request({ url, ...options })
  return options.processor ? options.processor(res.data) : res.data
}

export const errorNotify = <ResponseData>(error: AxiosError) => {
  const options = error.config as AxiosOptionsType<ResponseData>
  const notify = (message: string) => {
    if (options?.messageOnly) return String
    const notifyType = options?.disabledAlert ? console.log : alert
    notifyType(message)
    return Promise.reject(error)
  }
  const response = error?.response
  const isAxiosError = error instanceof AxiosError
  const isNetworError = !isAxiosError || !response
  if (isNetworError) return notify(messages.error.server)

  const { status, data } = response
  const customMessage = options?.messages?.[status]
  const serverMessage = (data as { message?: string })?.message
  if (customMessage) return notify(customMessage)
  if (serverMessage) return notify(serverMessage)

  switch (status) {
    case 404:
      return notify(messages.error.notFound)
    case 401:
      return notify(messages.error.token)
    case 500:
      return notify(messages.error.server)
    default:
      return notify(messages.error.request)
  }
}
