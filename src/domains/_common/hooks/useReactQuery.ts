import axios, { AxiosRequestConfig, AxiosError } from 'axios'
import { useQuery, useSuspenseQuery, useMutation } from '@tanstack/react-query'
import { config, messages } from '@common/constants'

type AxiosOtionsType = AxiosRequestConfig & {
  processor?: (data: unknown) => unknown
}

type QueryOptionsType = {
  queryKey?: string[]
  disableQuery?: boolean
  suspense?: boolean
  meta?: {
    messages?: {
      [key: number]: string
    }
  }
}

const customAxios = async <ResponseData>(
  url: string,
  options: AxiosOtionsType
): Promise<ResponseData> => {
  const isBaseUrl = options.baseURL !== undefined
  const baseURL = isBaseUrl ? options.baseURL : config.SERVER_URL
  const res = await axios.request({
    url: baseURL + url,
    withCredentials: true,
    ...options,
  })
  if (!options.processor) return res.data
  else return options.processor(res.data) as ResponseData
}

export const useReactQuery = <ResponseData>(
  url: string,
  options: AxiosRequestConfig,
  queryOptions?: QueryOptionsType
) => {
  const { suspense, disableQuery, queryKey } = queryOptions ?? {}
  if (options.method === 'GET') {
    if (disableQuery) return customAxios(url, options)
    const query = suspense ? useSuspenseQuery : useQuery
    return query<ResponseData>({
      queryKey: queryKey || [url],
      queryFn: () => customAxios(url, options),
      gcTime: Infinity,
      ...queryOptions,
    })
  } else {
    return useMutation<ResponseData>({
      mutationKey: queryKey || [url],
      mutationFn: () => customAxios(url, options),
      gcTime: Infinity,
      ...queryOptions,
    })
  }
}

export const errorHandler = (
  error: unknown,
  query?: Pick<QueryOptionsType, 'meta'>
) => {
  const isAxiosError = error instanceof AxiosError
  if (!isAxiosError || !error.response) return alert(messages.error.server)
  const status = error.response.status
  const customMessage = query?.meta?.messages?.[status]
  if (status >= 500) return alert(messages.error.server)
  if (query?.meta) return alert(customMessage)
  switch (status) {
    case 404:
      return alert(messages.error.notFound)
    case 401:
      return alert(messages.error.token)
    default:
      return alert(messages.error.request)
  }
}
