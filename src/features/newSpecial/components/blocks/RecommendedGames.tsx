import { RecommendedGamesItem } from '@common/components'
import { Swiper, SwiperSlide } from 'swiper/react'

import arrow from '@/assets/imgs/common/component/link_arrow_gray.png'

export const RecommendedGames = () => {
  return (
    <div className="recommendedGames-list">
      <div className="recommendedGames-list-header">
        <div className="game-info">
          <div className="game-name">No Man’s Sky</div>
          <div className="game-recommend-reason">
            <span>The Long Dark</span> 제품을 찜해서 추천
          </div>
        </div>
        <div className="etc">
          <span className="heart"></span>
          <span className="cart"></span>
        </div>
      </div>
      <Swiper
        className="basic"
        speed={500}
        loop={true}
        slidesPerView="auto"
        resistanceRatio={0}
      >
        {RecommendedGamesItem.map((game, index) => (
          <SwiperSlide key={index}>
            <div className="game_img">
              <img src={game.img} alt={game.img} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="recommendedGames-list-footer">
        <div className="game-price">
          <div className="game-discountPercent radius">-30%</div>
          <span className="sale">₩24,150</span>
          <span className="original discounted">₩34,500</span>
        </div>
        <div className="game-link">
          자세히 보기 <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  )
}
