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
    <section className="new_games_wrap game-wrap">
      <div className="tab_area tab-area">
        <nav
          className="tab_list tab-list"
          role="tablist"
          aria-label="게임 탭 목록"
        >
          {TABS.map((tab, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={index === activeTab}
              aria-controls={`tabpanel-${index}`}
              id={`tab-${index}`}
              className={index === activeTab ? 'active' : ''}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </nav>

        <div className="tab_game tab-game" role="tabpanel">
          <Swiper
            id="mainBasicSwiper"
            className="main_swiper_hotNew game-container"
            slidesPerView={1}
            spaceBetween={24}
            title={TABS[activeTab]}
          >
            {chunkArray(currentGameList, 6).map((sliceData) =>
              sliceData.map((el, idx) => (
                <article
                  key={`game-item-${idx}`}
                  className="game-item-list"
                  onMouseEnter={() => setHoverGameId(el.id)}
                >
                  <img
                    src={`assets/imgs/temp/${el.img_url}`}
                    alt={`${el.title} 이미지`}
                    className="game-img"
                  />
                  <div className="game-info">
                    <h3 className="game-name">{el.title}</h3>
                    <p className="game-description">{el.desc}</p>
                    <ul className="game-tags hashtag">
                      {el.tags.map((tag, key) => (
                        <li key={key}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))
            )}
          </Swiper>
        </div>
      </div>
      <GameInfoTeb gameInfo={gameDetail} />
    </section>
  )
}
