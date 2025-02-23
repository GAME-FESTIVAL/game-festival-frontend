import {
  RollingBanner,
  CurrentTime,
  RollingBannerSwiper,
  PopularGamesSwiper,
  HotdealSwiper,
  NewGamesSwiper,
  FavoriteGameSwiper,
} from '@main/components'
import { StarEffect } from '@main/components'

//--------------- 이미지 ---------------//
/* sc_hero 키비주얼 영역 */
// ## 가운데 콘텐츠
import window1 from '@/assets/imgs/main/img_hero_window1.png'
import window2 from '@/assets/imgs/main/img_hero_window2.png'
import window3 from '@/assets/imgs/main/img_hero_window3.png'

import phoneDeco from '@/assets/imgs/main/img_favoriteGame_firstLine_deco.png'
import faceDeco from '@/assets/imgs/main/img_favoriteGame_secondLine_deco.png'

export const Main = () => {
  return (
    <main id="main" className="inner fill">
      {/* ## 키비주얼 영역 */}
      <section className="sc_hero">
        {/* 상단 배너 */}
        <RollingBannerSwiper direction="left" />

        {/* 가운데 콘텐츠 */}
        <div className="inner">
          <div className="left_column">
            <div className="tit">
              <h1 className="childText">
                <p data-child="GAME">GAME</p>
                <p data-child="FESTIVAL">FESTIVAL</p>
              </h1>

              {/* 반짝이 데코 요소 */}
              <StarEffect count={10} />
            </div>
            <CurrentTime />
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
        <RollingBannerSwiper direction="right" />
      </section>
      {/* ## 현재 인기있는 게임 */}
      <section className="sc_popularGame">
        <div className="inner">
          <div className="top_tit">
            <h1 className="childText small">
              <p data-child="POPULAR GAMES">POPULAR GAMES</p>
              <p data-child="RIGHT NOW">RIGHT NOW</p>
              {/* 반짝이 데코 요소 */}
              <StarEffect count={8} />
            </h1>
          </div>
          <PopularGamesSwiper />
        </div>
      </section>
      {/* ## 핫딜 */}
      <section className="sc_hotDeal">
        <div className="inner">
          <HotdealSwiper />
        </div>
      </section>
      {/* ## what's your favorite game? */}
      <section className="sc_favoriteGame">
        {/* 반짝이 데코 요소 */}
        <StarEffect count={16} />
        <div className="inner">
          <div className="top_row">
            <div className="top_card_wrap">
              <div className="top_card">
                <div className="card_title">
                  <div className="windoDecoBtn">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <p>GAME FESTIVAL</p>
                </div>
                <div className="card_content">
                  <div className="firstLine line">
                    <div className="contentText">
                      <p>What's your</p>
                    </div>
                    <div className="rightDeco deco">
                      <div>
                        <img src={phoneDeco} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="secondLine line">
                    <div className="leftDeco deco">
                      <div>
                        <img src={faceDeco} alt="" />
                      </div>
                    </div>
                    <div className="contentText">
                      <p>favorite game?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="top_card fake">
                <div className="card_title">
                  <div className="windoDecoBtn">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <p>GAME FESTIVAL</p>
                </div>
              </div>
            </div>
          </div>

          <FavoriteGameSwiper />
        </div>
      </section>
      {/* 인기 신제품 */}
      <section className="sc_HowNew">
        <div className="inner">
          <NewGamesSwiper />
        </div>
      </section>
      {/* ## 풋터 상단 마지막 배너 단락 */}
      <section className="sc_lastBanner">
        <div className="tit">
          <p>
            Find more games to play
            <br /> at the game festival!
          </p>
          <span>게임 페스티발에서 더 많은 게임을 찾아보세요!</span>
        </div>
      </section>
    </main>
  )
}
