import { Swiper } from '@common/components'
import main_hotdeal_slide_img_1 from '@/assets/imgs/temp/main_hotdeal_slide_img_1.png'
import { useState } from 'react'
import { checkDevice } from '@common/utils'

export const HotdealSwiper = () => {
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0)

  const selectSlide = (idx: number) => setSelectedSlideIndex(idx)

  const swiperProps = {
    id: 'mainProgressSwiper',
    className: 'main_swiper_popular_games',
    slidesPerView: checkDevice.isMobile() ? 2.4 : 5,
    spaceBetween: 45, // 임시값
  }

  return (
    <figure className="hotdeal_swiper_wrap">
      <div className="left-column">
        <h1 className="childText small">
          <p data-child="HOT DEAL">HOT DEAL</p>
        </h1>
        <Swiper.Vertical
          id="mainVerticalSwiper"
          className="main_slide_hotdeal"
          spaceBetween={15}
          height={140}
        >
          {Array(10)
            .fill(0)
            .map((_, idx) => (
              <div
                className={`slide_wrap hotDeal_item ${
                  selectedSlideIndex === idx ? 'active' : ''
                }`}
                onClick={() => selectSlide(idx)}
              >
                <div className="game_txt">
                  <p>호그와트 레거시</p>
                  <span>
                    호그와트 레거시는 몰입형 오픈월드 액션 RPG입니다. 이제
                    여러분도 꿈에 그리던 마법 세계에 직접 영향을 끼칠 수
                    있습니다. 마법 세계에서 펼쳐지는 모험의 주인공이 되어보세요.
                  </span>
                </div>
                <section className="img_wrap">
                  <img src={main_hotdeal_slide_img_1} alt="" />
                </section>
              </div>
            ))}
        </Swiper.Vertical>
      </div>

      <div className="right-column">
        <div className="game_desc">
          <Swiper.Thubms id="mainThumbsSwiper">
            {Array.from({ length: 10 }).map((_, idx) => (
              <div className="slide_wrap">
                <img
                  src={`https://swiperjs.com/demos/images/nature-${
                    idx + 1
                  }.jpg`}
                  alt=""
                />
              </div>
            ))}
          </Swiper.Thubms>
          <div className="game_txt">
            <p>호그와트 레거시</p>
            <span>
              호그와트 레거시는 몰입형 오픈월드 액션 RPG입니다. 이제 여러분도
              꿈에 그리던 마법 세계에 직접 영향을 끼칠 수 있습니다. 마법
              세계에서 펼쳐지는 모험의 주인공이 되어보세요.
              <span className="release_date">출시일 : 2024. 01. 01</span>
            </span>
          </div>
        </div>
        <div className="review_collection">
          <Swiper.Review id="ReviewSwiper">
            {Array.from({ length: 10 }).map((_, idx) => (
              <div className="slide_wrap">
                <img
                  src={`https://swiperjs.com/demos/images/nature-${
                    idx + 1
                  }.jpg`}
                  alt=""
                />
              </div>
            ))}
          </Swiper.Review>
        </div>
      </div>
    </figure>
  )
}
