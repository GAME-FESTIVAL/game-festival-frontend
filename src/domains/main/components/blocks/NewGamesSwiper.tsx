import { useEffect, useState } from 'react'
import { Swiper } from '@common/components'
import { chunkArray } from '@common/utils'
import { GameInfoTeb } from '@main/components'
import {
  useGeNewGameList,
  useGetBestGameList,
  useGetUpcomingGameList,
  useGetSpecialDiscountGameList,
  useGetPopularFreeGameList,
  useGetGameDetail,
} from '@main/services'

const TABS = [
  '인기 신제품',
  '최고 인기 제품',
  '인기 출시 예정 제품',
  '특별 할인',
  '인기 무료 플레이',
]

export const NewGamesSwiper = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [hoverGameId, setHoverGameId] = useState('')
  const { data: newGameList } = useGeNewGameList()
  const { data: bestGameList } = useGetBestGameList()
  const { data: upcomingGameList } = useGetUpcomingGameList()
  const { data: specialDiscountGameList } = useGetSpecialDiscountGameList()
  const { data: popularFreeGameList } = useGetPopularFreeGameList()
  const { data: gameDetail } = useGetGameDetail(hoverGameId)

  const currentGameList = [
    newGameList,
    bestGameList,
    upcomingGameList,
    specialDiscountGameList,
    popularFreeGameList,
  ][activeTab]

  useEffect(() => {
    if (newGameList) setHoverGameId(newGameList[0].id)
  }, [newGameList])

  return (
    <section className="new_games_wrap">
      <div className="tab_area">
        <ul className="tab_list">
          {TABS.map((tab, index) => (
            <li
              key={index}
              className={index === activeTab ? 'active' : ''}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </li>
          ))}
        </ul>

        <div className="tab_game">
          <Swiper
            id="mainBasicSwiper"
            className="main_swiper_new_games main_swiper_hotNew"
            slidesPerView={1}
            spaceBetween={24}
            title={TABS[activeTab]}
          >
            {chunkArray(currentGameList, 6).map((sliceData) =>
              sliceData.map((el, idx) => (
                <div
                  key={`grid_item-${idx}`}
                  className="grid_item"
                  onMouseEnter={() => setHoverGameId(el.id)}
                >
                  <div className="img_wrap">
                    <img src={`assets/imgs/temp/${el.img_url}`} alt="" />
                  </div>
                  <div className="game_info">
                    <p className="game_name">{el.title}</p>
                    <div className="game_description">{el.desc}</div>
                    <ul className="game_tags">
                      {el.tags.map((tag, key) => (
                        <li key={key}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))
            )}
          </Swiper>
        </div>
      </div>
      <GameInfoTeb gameInfo={gameDetail} />
    </section>
  )
}
