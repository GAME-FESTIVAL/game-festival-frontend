import { useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import USER from '@main/services/queries'

export const useQueryUtils = () => {
  const queryClient = useQueryClient()
  const [queryKeys] = useState({
    USER,
  })

  const getQueryData = (queryKey: string[]) => {
    return queryClient.getQueryData(queryKey)
  }

  const invalidateQueries = (...queryKeys: string[][]) => {
    queryKeys.forEach((key) => {
      queryClient.invalidateQueries({
        queryKey: [...key],
      })
    })
  }

  return {
    queryKeys,
    getQueryData,
    invalidateQueries,
  }
}
