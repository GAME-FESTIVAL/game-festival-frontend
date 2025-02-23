import { useState } from 'react'

import { Swiper } from '@common/components'
import main_new_games_slide_img_1 from '@/assets/imgs/temp/main_new_games_slide_img_1.png'

import star from '@/assets/imgs/common/star.png'

import howNewGameImg1 from '@/assets/imgs/temp/main_HowNew_game1.png'
import howNewGameImg2 from '@/assets/imgs/temp/main_HowNew_game2.png'
import howNewGameImg3 from '@/assets/imgs/temp/main_HowNew_game3.png'
import howNewGameImg4 from '@/assets/imgs/temp/main_HowNew_game4.png'

export const NewGamesSwiper = () => {
  const swiperProps = {
    id: 'mainBasicSwiper',
    className: 'main_swiper_new_games main_swiper_hotNew',
    slidesPerView: 1,
    spaceBetween: 24, // 임시값
    title: '인기 신제품',
  }

  const [activeTab, setActiveTab] = useState(0)
  const [hoverGame, setHoverGame] = useState(null)

  const hoverImages = [
    howNewGameImg1,
    howNewGameImg2,
    howNewGameImg3,
    howNewGameImg4,
  ]

  const tabs = [
    '인기 신제품',
    '최고 인기 제품',
    '인기 출시 예정 제품',
    '특별 할인',
    '인기 무료 플레이',
  ]

  return (
    <section className="new_games_wrap">
      <div className="tab_area">
        <ul className="tab_list">
          {tabs.map((tab, index) => (
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
          {tabs.map((_, index) => (
            <div
              key={index}
              className={`swiper_container ${
                index === activeTab ? 'active' : 'hidden'
              }`}
            >
              <Swiper {...swiperProps}>
                {Array.from({ length: 10 }).map(() => {
                  return (
                    <>
                      {Array.from({ length: 6 }).map((_, idx) => (
                        <div
                          key={`grid_item-${idx}`}
                          className="grid_item"
                          onMouseEnter={() => setHoverGame(idx)}
                          onMouseLeave={() => setHoverGame(null)}
                        >
                          <div className="img_wrap">
                            <img src={main_new_games_slide_img_1} alt="" />
                          </div>
                          <div className="game_info">
                            <p className="game_name">ZERO Sievert</p>
                            <div className="game_description">
                              ZERO Sievert는 알고리즘에 따라 생성된 황무지를
                              뒤지고 장비를 약탈하고 황폐해진 세계에 남겨진 것을
                              탐험하며 도전하는 강렬한 탑다운 익스트랙션 슈터
                              게임입니다. 여러분에게 불리한 상황이 닥치면, 생존
                              그 이상의 일을 해내야 할 것입니다…
                            </div>
                            <ul className="game_tags">
                              {[
                                '익스트랙션 슈터',
                                '생존',
                                '포스트아포칼립스',
                              ].map((el, key) => (
                                <li key={key}>{el}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </>
                  )
                })}
              </Swiper>
            </div>
          ))}
        </div>
      </div>

      <div className="HowNew_gameInfo active">
        <div className="game_info">
          <div className="game_txt">
            <p className="game_name">
              게임 {hoverGame !== null ? hoverGame + 1 : 1}
            </p>
            <div className="game_price">
              <div className="discountPercent_red">-25%</div>
              <div className="left-column">
                <span className="original discounted">₩47,000</span>
                <span className="sale">₩42,300</span>
              </div>
            </div>
            <div className="total_score">
              <img src={star} alt="" />
              <div>
                <span>종합 평가:</span>
                <p>
                  대체로 긍정적<span>(총 평가수: 60,045)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="game_img">
          {/* 여러 개의 이미지를 표시 */}
          {hoverImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`게임 ${hoverGame + 1} 이미지 ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
