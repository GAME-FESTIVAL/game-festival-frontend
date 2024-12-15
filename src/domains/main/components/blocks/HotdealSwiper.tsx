import { Swiper } from '@common/components/blocks/swipers'
import main_hotdeal_slide_img_1 from '@/assets/imgs/temp/main_hotdeal_slide_img_1.png'
import { useState } from 'react'

export const HotdealSwiper = () => {
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0)

  const selectSlide = (idx: number) => setSelectedSlideIndex(idx)

  return (
    <figure className="hotdeal_swiper_wrap">
      <Swiper.Vertical
        id="mainVerticalSwiper"
        className="main_slide_hotdeal"
        spaceBetween={15}
        height={'140px'}
      >
        {Array(10)
          .fill(0)
          .map((_, idx) => (
            <div
              className={`slide_wrap ${
                selectedSlideIndex === idx ? 'active' : ''
              }`}
              onClick={() => selectSlide(idx)}
            >
              <dl>
                <dt>호그와트 레거시</dt>
                <dd>
                  호그와트 레거시는 몰입형 오픈월드 액션 RPG입니다. 이제
                  여러분도 꿈에 그리던 마법 세계에 직접 영향을 끼칠 수 있습니다.
                  마법 세계에서 펼쳐지는 모험의 주인공이 되어보세요.
                </dd>
              </dl>
              <section className="img_wrap">
                <img src={main_hotdeal_slide_img_1} alt="" />
              </section>
            </div>
          ))}
      </Swiper.Vertical>

      <Swiper.Thubms id="mainThumbsSwiper">
        {Array(10)
          .fill(0)
          .map((_, idx) => (
            <div className="slide_wrap">
              <img
                src={`https://swiperjs.com/demos/images/nature-${idx + 1}.jpg`}
                alt=""
              />
            </div>
          ))}
      </Swiper.Thubms>
    </figure>
  )
}
