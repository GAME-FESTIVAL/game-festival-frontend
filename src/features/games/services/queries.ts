import { useMutation, useQuery } from '@tanstack/react-query'
import { useQueryUtils } from '@common/hooks'
import { createQueryKeyFactory } from '@common/utils'
import { gamesApis } from './apis'

export const GAMES_QUERY_KEYS = createQueryKeyFactory(gamesApis, 'games')

// 게임

export const useGetGames = (params: string) => {
  return useQuery({
    queryKey: [...GAMES_QUERY_KEYS.getGames, params],
    queryFn: () => gamesApis.list.getGames(params),
  })
}

export const useGetGameDetail = (id: string) => {
  return useQuery({
    queryKey: [...GAMES_QUERY_KEYS.getGameDetail, id],
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

export const usePatchGame = (id: string) => {
  return useMutation({
    mutationFn: (body: GamesTypes.PatchGame.Request) =>
      gamesApis.update.patchGame(id, body),
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
    queryKey: [...GAMES_QUERY_KEYS.getComments, params],
    queryFn: () => gamesApis.list.getComments(params),
  })
}

export const usePostComment = () => {
  const {
    queryKeys: { games },
    invalidateQueries,
  } = useQueryUtils()
  return useMutation({
    mutationFn: (body: GamesTypes.PostComment.Request) =>
      gamesApis.update.postComment(body),
    onSuccess: (_, { gameId }) => {
      invalidateQueries(games.getComments, [...games.getGameDetail, gameId])
    },
  })
}

export const usePostDummyComment = () => {
  const {
    queryKeys: { games, common },
    invalidateQueries,
  } = useQueryUtils()
  return useMutation({
    mutationFn: (body: GamesTypes.PostComment.Request) =>
      gamesApis.update.postDummyComment(body),
    onSuccess: (_, { gameId }) => {
      invalidateQueries(
        games.getComments,
        [...games.getGameDetail, gameId],
        common.getUsers
      )
    },
  })
}

export const usePatchComment = () => {
  const {
    queryKeys: { games },
    invalidateQueries,
  } = useQueryUtils()
  return useMutation({
    mutationFn: (body: GamesTypes.PatchComment.Request) =>
      gamesApis.update.patchComment(body),
    onSuccess: (_, { gameId }) => {
      invalidateQueries(games.getComments, [...games.getGameDetail, gameId])
    },
  })
}

export const useDeleteComment = () => {
  const {
    queryKeys: { games },
    invalidateQueries,
  } = useQueryUtils()
  return useMutation({
    mutationFn: (id: string) => gamesApis.delete.deleteComment(id),
    onSuccess: (_, id) => {
      invalidateQueries(games.getComments, [...games.getGameDetail, id])
    },
  })
}

export default GAMES_QUERY_KEYS
