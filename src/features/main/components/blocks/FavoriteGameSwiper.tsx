import { Swiper } from '@common/components'
import main_favorite_game_slide_img_1 from '@/assets/imgs/temp/main_favorite_game_slide_img_1.png'
import { checkDevice } from '@common/utils/checkDevice'

export const FavoriteGameSwiper = () => {
  const swiperProps = {
    id: 'mainRollingSwiper',
    className: 'favoriteGame-slide-container',
    slidesPerView: checkDevice.isMobile() ? 3.5 : 6.5,
    spaceBetween: checkDevice.isMobile() ? 10 : 20, // 임시값
    speed: 2000,
  }

  return (
    <section className="favoriteGame-slide-wrap">
      <Swiper.Rolling {...swiperProps}>
        {Array.from({ length: 20 }).map((_, idx) => (
          <img
            key={`${swiperProps.id}${idx}`}
            src={main_favorite_game_slide_img_1}
            alt=""
          />
        ))}
      </Swiper.Rolling>

      <Swiper.Rolling {...swiperProps} reverseDirection={true}>
        {Array.from({ length: 20 }).map((_, idx) => (
          <img
            key={`${swiperProps.id}${idx}`}
            src={main_favorite_game_slide_img_1}
            alt=""
          />
        ))}
      </Swiper.Rolling>
    </section>
  )
}
