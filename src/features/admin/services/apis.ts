import { requestAPI } from '@common/utils'

export const adminApis = {
  list: {
    getGames: (params: string) => {
      return requestAPI<MainTypes.GetPopularGameList.Response>(
        `/games?${params}`,
        { method: 'GET' }
      )
    },
  },

  delete: {},

  update: {
    postGame: (data: AdminTypes.PostGame.Request) => {
      return requestAPI(`/games`, {
        method: 'POST',
        data,
      })
    },
  },

  utility: {},
}
