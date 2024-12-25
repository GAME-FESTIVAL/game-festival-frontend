import { Swiper } from '@common/components'
import { bannerItemsList } from '@main/constants'

type RollingBannerSwiperProps = { direction: string }

export const RollingBannerSwiper = ({
  direction,
}: RollingBannerSwiperProps) => {
  const calculateSlidesPerView = () => {
    const viewportWidth = window.innerWidth
    const itemWidth = 330 + 32 + 65
    return Math.min(3, Math.max(1, Math.floor(viewportWidth / itemWidth)))
  }

  const generateInfiniteSlides = () => {
    const slidesPerView = calculateSlidesPerView()
    const totalSlidesNeeded = slidesPerView * 2
    const duplicatedItems = []
    while (duplicatedItems.length < totalSlidesNeeded) {
      duplicatedItems.push(...bannerItemsList)
    }
    return duplicatedItems.slice(0, totalSlidesNeeded)
  }

  const swiperProps = {
    id: `mainRollingBannerSwiper${direction}`,
    className: 'main_swiper_rolling_banner',
    slidesPerView: calculateSlidesPerView(),
    spaceBetween: 0,
    speed: 2000,
  }

  return (
    <section className="rolling_banner_wrap">
      <Swiper.Rolling
        {...swiperProps}
        reverseDirection={direction === 'right' ? true : false}
      >
        {generateInfiniteSlides().map((el, idx) => (
          <div
            key={idx}
            className={`banner_item ${
              idx % 2 === 0 ? 'even-slide' : 'odd-slide'
            }`}
          >
            <p>{el.text}</p>
            <img src={el.icon} alt={`icon${idx}`} />
          </div>
        ))}
      </Swiper.Rolling>
    </section>
  )
}
