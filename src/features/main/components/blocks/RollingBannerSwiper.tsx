import { Swiper } from '@common/components'
import { bannerItemsList } from '@main/constants'

type RollingBannerSwiperProps = { direction: string }

export const RollingBannerSwiper = ({
  direction,
}: RollingBannerSwiperProps) => {
  const calculateSlidesPerView = () => {
    const viewportWidth = window.innerWidth
    const itemWidth = 305
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
    speed: 3000,
  }

  return (
    <section
      className="hero-rolling-wrap rolling_banner_wrap"
      aria-label={direction === 'left' ? '상단 롤링 배너' : '하단 롤링 배너'}
    >
      <Swiper.Rolling
        {...swiperProps}
        reverseDirection={direction === 'right' ? true : false}
      >
        {generateInfiniteSlides().map((el, idx) => (
          <figure
            key={idx}
            className={`hero-rolling-item banner_item ${
              idx % 2 === 0 ? 'even-slide' : 'odd-slide'
            }`}
          >
            <figcaption>{el.text}</figcaption>
            <img src={el.icon} alt={el.text} />
          </figure>
        ))}
      </Swiper.Rolling>
    </section>
  )
}
