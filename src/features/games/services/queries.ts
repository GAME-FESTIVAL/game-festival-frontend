import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { createQueryKeyFactory } from '@common/utils'
import { gamesApis } from './apis'

export const GAME_QUERY_KEYS = createQueryKeyFactory(gamesApis, 'games')

// 게임

export const useGetGames = (params: string) => {
  return useQuery({
    queryKey: [...GAME_QUERY_KEYS.getGames, params],
    queryFn: () => gamesApis.list.getGames(params),
  })
}

export const useGetGameDetail = (id: string) => {
  return useQuery({
    queryKey: [...GAME_QUERY_KEYS.getGameDetail, id],
    queryFn: () => gamesApis.detail.getGameDetail(id),
    enabled: !!id,
  })
}

export const usePostGame = () => {
  return useMutation({
    mutationFn: (body: GamesTypes.PostGame.Request) =>
      gamesApis.update.postGame(body),
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
    }) => gamesApis.update.patchGame(id, body),
  })
}

export const useDeleteGame = () => {
  return useMutation({
    mutationFn: (id: string) => gamesApis.delete.deleteGame(id),
  })
}

// 게임 코멘트

export const useGetComments = (params: string) => {
  return useQuery({
    queryKey: [...GAME_QUERY_KEYS.getComments, params],
    queryFn: () => gamesApis.list.getComments(params),
  })
}

export const usePostComment = () => {
  return useMutation({
    mutationFn: (body: GamesTypes.PostComment.Request) =>
      gamesApis.update.postComment(body),
  })
}

export const usePostDummyComment = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (body: GamesTypes.PostComment.Request) =>
      gamesApis.update.postDummyComment(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: GAME_QUERY_KEYS.getComments })
    },
  })
}

export const usePatchComment = () => {
  return useMutation({
    mutationFn: (body: GamesTypes.PatchComment.Request) =>
      gamesApis.update.patchComment(body),
  })
}

export const useDeleteComment = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) => gamesApis.delete.deleteComment(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: GAME_QUERY_KEYS.getComments })
    },
  })
}
