import { useMutation, useQuery } from '@tanstack/react-query'
import { createQueryKeyFactory } from '@common/utils'
import { adminApis } from './apis'

const USER_QUERY_KEYS = createQueryKeyFactory(adminApis, 'admin')

export const useGetGames = (params: string) => {
  return useQuery({
    queryKey: [...USER_QUERY_KEYS.getGames, params],
    queryFn: () => adminApis.list.getGames(params),
  })
}

export const useGetGameDetail = (id: string) => {
  return useQuery({
    queryKey: [...USER_QUERY_KEYS.getGameDetail, id],
    queryFn: () => adminApis.detail.getGameDetail(id),
    enabled: !!id,
  })
}

export const usePostGame = () => {
  return useMutation({
    mutationFn: (body: GamesTypes.PostGame.Request) =>
      adminApis.update.postGame(body),
  })
}

export const usePatchGame = () => {
  return useMutation({
    mutationFn: ({
      id,
      body,
    }: {
      id: string
      body: GamesTypes.PatchGame.Request
    }) => adminApis.update.patchGame(id, body),
  })
}

export const useDeleteGame = () => {
  return useMutation({
    mutationFn: (id: string) => adminApis.delete.deleteGame(id),
  })
}

export default USER_QUERY_KEYS
