import { Swiper } from '@common/components'
import { checkDevice } from '@common/utils'
import main_slide_img_1 from '@/assets/imgs/temp/main_slide_img_1.png'

export const PopularGamesSwiper = () => {
  const swiperProps = {
    id: 'mainProgressSwiper',
    className: 'main_swiper_popular_games',
    slidesPerView: checkDevice.isMobile() ? 2.4 : 5,
    spaceBetween: 45, // 임시값
  }

  return (
    <Swiper.Progress {...swiperProps}>
      {Array(20)
        .fill(0)
        .map(() => (
          <div>
            <div className="game_img">
              <img src={main_slide_img_1} alt="" />
            </div>
            <div className="game_txt">
              <p>Call of Duty®: Black Ops 6</p>
              <span>
                콜 오브 듀티®:블랙 옵스 6는 영화 같은 싱글 플레이어 캠페인, 동급
                최고의 멀티 플레이어 경험, 그리고 라운드 기반 좀비의 장대한
                귀환을 기념하는 블랙 옵스의 대표 게임입니다.
              </span>
            </div>
          </div>
        ))}
    </Swiper.Progress>
  )
}
