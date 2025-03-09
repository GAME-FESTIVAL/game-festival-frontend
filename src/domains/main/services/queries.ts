import { useQuery } from '@tanstack/react-query'
import { createQueryKeyFactory } from '@common/utils'
import { mainApis } from './apis'

const USER_QUERY_KEYS = createQueryKeyFactory(mainApis, 'main')

export const useGetPopularGameList = () => {
  return useQuery({
    queryKey: USER_QUERY_KEYS.getPopularGameList, // ['main', 'list', 'getPopularGameList']
    queryFn: mainApis.list.getPopularGameList,
  })
}

export const useGetHotdealGameList = () => {
  return useQuery({
    queryKey: USER_QUERY_KEYS.getHotdealGameList,
    queryFn: mainApis.list.getHotdealGameList,
  })
}

export const useGeNewGameList = () => {
  return useQuery({
    queryKey: USER_QUERY_KEYS.getNewGameList,
    queryFn: mainApis.list.getNewGameList,
  })
}

export const useGetBestGameList = () => {
  return useQuery({
    queryKey: USER_QUERY_KEYS.getBestGameList,
    queryFn: mainApis.list.getBestGameList,
  })
}

export const useGetUpcomingGameList = () => {
  return useQuery({
    queryKey: USER_QUERY_KEYS.getUpcomingGameList,
    queryFn: mainApis.list.getUpcomingGameList,
  })
}

export const useGetSpecialDiscountGameList = () => {
  return useQuery({
    queryKey: USER_QUERY_KEYS.getSpecialDiscountGameList,
    queryFn: mainApis.list.getSpecialDiscountGameList,
  })
}

export const useGetPopularFreeGameList = () => {
  return useQuery({
    queryKey: USER_QUERY_KEYS.getPopularFreeGameList,
    queryFn: mainApis.list.getPopularFreeGameList,
  })
}

export const useGetGameDetail = (id: string) => {
  return useQuery({
    queryKey: [...USER_QUERY_KEYS.getGameDetail, id], // ['main', 'detail', 'getGameDetail', id]
    queryFn: () => mainApis.detail.getGameDetail(id),
    enabled: !!id,
  })
}

export default USER_QUERY_KEYS
