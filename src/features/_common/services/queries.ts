import { useMutation } from '@tanstack/react-query'
import { createQueryKeyFactory } from '@common/utils'
import { commnApis } from './apis'

const USER_QUERY_KEYS = createQueryKeyFactory(commnApis, 'admin')

export const usePostFiles = () => {
  return useMutation({
    mutationFn: (files: GlobalTypes.File.Item[]) =>
      commnApis.utility.postFiles(files),
  })
}

export default USER_QUERY_KEYS
