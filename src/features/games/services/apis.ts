import { requestAPI } from '@common/utils'

export const adminApis = {
  list: {
    getGames: (params: string) => {
      return requestAPI<GamesTypes.GetGames.Response>(`/games?${params}`, {
        method: 'GET',
      })
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
  },

  delete: {
    deleteGame: (id: string) => {
      return requestAPI(`/games/${id}`, {
        method: 'DELETE',
      })
    },
  },

  utility: {},
}
