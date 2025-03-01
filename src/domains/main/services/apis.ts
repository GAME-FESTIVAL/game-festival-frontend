import { requestAPI } from '@common/utils'

export const mainApis = {
  list: {
    getPopularGameList: () => {
      return requestAPI<MainTypes.GetPopularGameList.Response>(
        'assets/data/games/list/popular-games.json',
        {
          method: 'GET',
        }
      )
    },

    getHotdealGameList: () => {
      return requestAPI<MainTypes.GetPopularGameList.Response>(
        'assets/data/games/list/hotdeal-games.json',
        {
          method: 'GET',
        }
      )
    },

    getNewGameList: () => {
      return requestAPI<MainTypes.GetNewGameList.Response>(
        'assets/data/games/list/new-games.json',
        {
          method: 'GET',
        }
      )
    },

    getBestGameList: () => {
      return requestAPI<MainTypes.GetBestGameList.Response>(
        'assets/data/games/list/new-games.json',
        {
          method: 'GET',
        }
      )
    },

    getUpcomingGameList: () => {
      return requestAPI<MainTypes.GetUpcomingGameList.Response>(
        'assets/data/games/list/new-games.json',
        {
          method: 'GET',
        }
      )
    },

    getSpecialDiscountGameList: () => {
      return requestAPI<MainTypes.GetSpecialDiscountGameList.Response>(
        'assets/data/games/list/new-games.json',
        {
          method: 'GET',
        }
      )
    },

    getPopularFreeGameList: () => {
      return requestAPI<MainTypes.GetPopularFreeGameList.Response>(
        'assets/data/games/list/new-games.json',
        {
          method: 'GET',
        }
      )
    },
  },

  detail: {
    getGameDetail: (id: string) => {
      return requestAPI<MainTypes.GetGameDetail.Response>(
        `assets/data/games/detail/${id}.json`,
        {
          method: 'GET',
        }
      )
    },
  },

  delete: {},

  update: {},

  utility: {},
}
