import { useState } from 'react'
import { RollingBanner, CurrentTime } from '@main/components'
import { bannerItemsList } from '@main/constants'

//--------------- 이미지 ---------------//
/* sc_hero 키비주얼 영역 */
// ## 가운데 콘텐츠
import window1 from '@/assets/imgs/main/img_hero_window1.png'
import window2 from '@/assets/imgs/main/img_hero_window2.png'
import window3 from '@/assets/imgs/main/img_hero_window3.png'

export const Main = () => {
  const [overlapItems] = useState(bannerItemsList.concat(bannerItemsList))

  return (
    <main className="main">
      <section className="sc_hero">
        {/* 상단 배너 */}
        <RollingBanner items={overlapItems} direction="left" />

        {/* 가운데 콘텐츠 */}
        <div className="inner">
          <div className="left_column">
            <div className="tit">
              <h1 className="childText">
                <p data-child="GAME">GAME</p>
                <p data-child="FESTIVAL">FESTIVAL</p>
              </h1>
              <CurrentTime />
              <div className="star"></div>
            </div>
          </div>
          <div className="right_column">
            {[window1, window2, window3].map((el, idx) => (
              <div>
                <img src={el} alt={`데코${idx}`} />
              </div>
            ))}
          </div>
        </div>

        {/* 하단 배너 */}
        <RollingBanner items={overlapItems} direction="right" />
      </section>
    </main>
  )
}
