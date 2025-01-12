import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperClass } from 'swiper'
import { FreeMode, EffectFade, Navigation, Thumbs } from 'swiper/modules'
import { gameSlidesData } from '@newSpecial/constants'

export const GameSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null)

  return (
    <>
      {/* 메인 슬라이더 */}
      <Swiper
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, EffectFade, Navigation, Thumbs]}
        className="basic"
        speed={700}
        effect={'fade'}
      >
        {gameSlidesData.map((game, index) => (
          <SwiperSlide key={index}>
            <div className="game_img">
              <img src={game.img} alt={game.name} />
            </div>
            <div className="game_info">
              <p className="game_name">{game.name}</p>
              <div className="game_description">{game.description}</div>
              <Link to="" className="game_detail">
                자세히 보기 <span className="arrow"></span>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* 썸네일 슬라이더 */}
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView="auto"
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumb"
      >
        {gameSlidesData.map((game, index) => (
          <SwiperSlide key={index}>
            <div className="game_img">
              <img src={game.thumb} alt={game.name} />
            </div>
            <p className="game_name">{game.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
