import { Swiper } from '@common/components'
import { checkDevice } from '@common/utils'
import { useGetPopularGameList } from '@main/services'
import main_slide_img_1 from '@/assets/imgs/temp/main_slide_img_1.png'

export const PopularGamesSwiper = () => {
  const { data } = useGetPopularGameList()

  const swiperProps = {
    id: 'mainProgressSwiper',
    className: 'main_swiper_popular_games',
    slidesPerView: checkDevice.isMobile() ? 2.4 : 5,
    spaceBetween: 45, // 임시값
  }

  return (
    <Swiper.Progress {...swiperProps}>
      {data?.map((el, idx) => (
        <div key={idx}>
          <div className="game-img">
            <img src={main_slide_img_1} alt={el.title} />
          </div>
          <div className="game-info">
            <h2 className="game-name">{el.title}</h2>
            <p className="game-description">{el.desc}</p>
          </div>
        </div>
      ))}
    </Swiper.Progress>
  )
}
