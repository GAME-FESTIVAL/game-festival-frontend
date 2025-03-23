import { useMutation, useQuery } from '@tanstack/react-query'
import { createQueryKeyFactory } from '@common/utils'
import { adminApis } from './apis'

const USER_QUERY_KEYS = createQueryKeyFactory(adminApis, 'admin')

export const useGetGames = (params: string) => {
  return useQuery({
    queryKey: USER_QUERY_KEYS.getGames,
    queryFn: () => adminApis.list.getGames(params),
  })
}

export const usePostGame = () => {
  return useMutation({
    mutationFn: (body: AdminTypes.PostGame.Request) =>
      adminApis.update.postGame(body),
  })
}

export default USER_QUERY_KEYS
