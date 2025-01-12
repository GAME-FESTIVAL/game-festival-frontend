import { Swiper } from '@common/components'
import main_new_games_slide_img_1 from '@/assets/imgs/temp/main_new_games_slide_img_1.png'

export const NewGamesSwiper = () => {
  const swiperProps = {
    id: 'mainBasicSwiper',
    className: 'main_swiper_new_games',
    slidesPerView: 1,
    spaceBetween: 24, // 임시값
    title: '인기 신제품',
  }

  return (
    <section className="new_games_wrap">
      <ul></ul>

      <Swiper {...swiperProps}>
        {Array.from({ length: 10 }).map(() => {
          return (
            <>
              {Array.from({ length: 6 }).map((_, idx) => (
                <div key={`grid_item-${idx}`} className="grid_item">
                  <div className="img_wrap">
                    <img src={main_new_games_slide_img_1} alt="" />
                  </div>
                  <dl className="desc">
                    <dt>ZERO Sievert</dt>
                    <dd>
                      ZERO Sievert는 알고리즘에 따라 생성된 황무지를 뒤지고
                      장비를 약탈하고 황폐해진 세계에 남겨진 것을 탐험하며
                      도전하는 강렬한 탑다운 익스트랙션 슈터 게임입니다.
                      여러분에게 불리한 상황이 닥치면, 생존 그 이상의 일을
                      해내야 할 것입니다…
                    </dd>
                    <dd className="tags">
                      {['익스트랙션 슈터', '생존', '포스트아포칼립스'].map(
                        (el, key) => (
                          <span key={key}>{el}</span>
                        )
                      )}
                    </dd>
                  </dl>
                </div>
              ))}
            </>
          )
        })}
      </Swiper>
    </section>
  )
}
