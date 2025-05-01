import { useQuery, useMutation } from '@tanstack/react-query'
import { createQueryKeyFactory } from '@common/utils'
import { commnApis } from './apis'

export const COMMON_QUERY_KEYS = createQueryKeyFactory(commnApis, 'common')

export const useGetUsers = () => {
  return useQuery({
    queryKey: COMMON_QUERY_KEYS.getUsers,
    queryFn: commnApis.list.getUsers,
  })
}

export const usePostFiles = () => {
  return useMutation({
    mutationFn: (files: GlobalTypes.File.Item[]) =>
      commnApis.utility.postFiles(files),
  })
}

export default COMMON_QUERY_KEYS
