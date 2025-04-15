import { Link } from 'react-router-dom'
import {
  popularUpcomingGamesData,
  allUpcomingGamesData,
} from '@newSpecial/constants'
import { useState, useEffect, useRef } from 'react'

export const UpcomingList = () => {
  const [activeTab, setActiveTab] = useState(0)
  const tabRefs = useRef<(HTMLLIElement | null)[]>([])
  const activeBarRef = useRef<HTMLDivElement | null>(null)

  const tabLabels = ['인기 출시 예정 게임', '모든 출시 예정 게임']
  const dataList =
    activeTab === 0 ? popularUpcomingGamesData : allUpcomingGamesData

  // 액티브 바
  useEffect(() => {
    const currentTab = tabRefs.current[activeTab]
    const activeBar = activeBarRef.current

    if (currentTab && activeBar) {
      activeBar.style.width = `${currentTab.offsetWidth}px`
      activeBar.style.left = `${currentTab.offsetLeft}px`
    }
  }, [activeTab])

  return (
    <div className="tab_area">
      {/* 카테고리: 인기 출시/모든 출시 예정 게임 */}
      <div className="tab_list" style={{ position: 'relative' }}>
        {tabLabels.map((label, index) => (
          <div
            key={index}
            ref={(el) => (tabRefs.current[index] = el)}
            className={activeTab === index ? 'active' : ''}
            onClick={() => setActiveTab(index)}
          >
            {label}
          </div>
        ))}
        <span ref={activeBarRef} className="active_bar" />
      </div>
      {/* 게임 리스트 나열 영역 */}
      <div className="tab_game">
        <div className="tab_game_element">
          {dataList.map((game) => (
            <Link to="" key={game.id} className="upcomingGamesList_element">
              <div className="game_img">
                <img src={game.img} alt={`Upcoming game ${game.id}`} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
