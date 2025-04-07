import { requestAPI } from '@common/utils'

export const gamesApis = {
  list: {
    getGames: (params: string) => {
      return requestAPI<GamesTypes.GetGames.Response>(`/games?${params}`, {
        method: 'GET',
      })
    },

    getComments: (params: string) => {
      return requestAPI<GamesTypes.GetComments.Response>(
        `/comments?${params}`,
        {
          method: 'GET',
        }
      )
    },
  },

  detail: {
    getGameDetail: (id: string) => {
      return requestAPI<GamesTypes.GetGameDetail.Response>(`/games/${id}`, {
        method: 'GET',
      })
    },
  },

  update: {
    postGame: (data: GamesTypes.PostGame.Request) => {
      return requestAPI(`/games`, {
        method: 'POST',
        data,
      })
    },

    patchGame: (id: string, data: GamesTypes.PatchGame.Request) => {
      return requestAPI(`/games/${id}`, {
        method: 'PATCH',
        data,
      })
    },

    postComment: (data: GamesTypes.PostComment.Request) => {
      return requestAPI(`/comments`, {
        method: 'POST',
        data,
      })
    },

    postDummyComment: (data: GamesTypes.PostComment.Request) => {
      return requestAPI(`/comments/dummy`, {
        method: 'POST',
        data,
      })
    },

    patchComment: (data: GamesTypes.PatchComment.Request) => {
      return requestAPI(`/comments`, {
        method: 'PATCH',
        data,
      })
    },
  },

  delete: {
    deleteGame: (id: string) => {
      return requestAPI(`/games/${id}`, {
        method: 'DELETE',
      })
    },

    deleteComment: (id: string) => {
      return requestAPI(`/comments/${id}`, {
        method: 'DELETE',
      })
    },
  },

  utility: {},
}
