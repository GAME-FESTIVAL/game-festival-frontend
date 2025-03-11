import { useCallback, useMemo, useState } from 'react'
import {
  popularNewGamesData,
  bannerData,
  gameCategories,
} from '@newSpecial/constants'
import { GameCard, BannerItem } from '@newSpecial/components'

// 메인 컴포넌트
export const PopularNewGames = () => {
  const [activeTab, setActiveTab] =
    useState<(typeof gameCategories)[number]>('특집')

  const filterGames = useCallback(
    (
      category: (typeof gameCategories)[number],
      data: NewSpecialTypes.GameData[] = popularNewGamesData
    ) => {
      const result = data.filter(({ tags, price }) =>
        category === '특집'
          ? price.discount
          : tags.some((tag) => tag.includes(category))
      )
      return result.length > 0 ? result : null
    },
    []
  )

  const filteredGames = useMemo(() => filterGames(activeTab), [activeTab])

  return (
    <>
      <div className="tab_area">
        <ul className="tab_list">
          {gameCategories.map((tab, index) => (
            <li
              key={index}
              className={tab === activeTab ? 'active' : ''}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
        <div className="tab_game">
          <div
            className={`tab_game_element visible ${
              !filteredGames ? 'notFound' : ''
            } `}
          >
            {filteredGames?.map((game, index) => (
              <GameCard key={index} {...game} />
            )) || <p>😥 콘텐츠가 없습니다.</p>}
          </div>
        </div>
      </div>
      <div className="banner_area">
        {bannerData.map((banner, index) => (
          <BannerItem key={index} {...banner} />
        ))}
      </div>
    </>
  )
}
