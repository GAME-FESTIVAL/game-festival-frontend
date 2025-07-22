import {
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
import window1 from '@/assets/imgs/main/hero-postit1.png'
import window2 from '@/assets/imgs/main/hero-postit2.png'
import window3 from '@/assets/imgs/main/hero-postit3.png'

import phoneDeco from '@/assets/imgs/main/img_favoriteGame_firstLine_deco.png'
import faceDeco from '@/assets/imgs/main/img_favoriteGame_secondLine_deco.png'

export const Main = () => {
  return (
    <main id="main" className="inner fill">
      {/* ## 키비주얼 영역 */}
      <section className="sc-hero">
        {/* 상단 롤링 배너 */}
        <RollingBannerSwiper direction="left" />

        {/* 가운데 콘텐츠 */}
        <div className="inner">
          {/* 좌측 텍스트 영역 */}
          <div className="hero-text-wrap">
            <div className="hero-text">
              <h1 className="childText" aria-label="GAME FESTIVAL">
                <span data-child="GAME">GAME</span>
                <span data-child="FESTIVAL">FESTIVAL</span>
              </h1>

              {/* 반짝이 데코 요소 */}
              <StarEffect count={10} />
            </div>
            {/* 현재 시간 노출 */}
            <CurrentTime />
          </div>
          {/* 우측 단순 꾸밈 요소 */}
          <aside
            className="hero-postit-wrap"
            aria-hidden="true"
            role="presentation"
          >
            <div className="hero-postit">
              {[window1, window2, window3].map((el, idx) => (
                <div key={`deco${idx}`}>
                  <img
                    src={el}
                    alt=""
                    role="presentation"
                    aria-hidden="true"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </aside>
        </div>

        {/* 하단 롤링 배너 */}
        <RollingBannerSwiper direction="right" />
      </section>
      {/* ## 현재 인기있는 게임 */}
      <section className="sc-popularGame sc_popularGame">
        <div className="inner">
          <div className="popularGame-text-wrap top_tit">
            <h1
              className="childText small"
              aria-label="POPULAR GAMES RIGHT NOW"
            >
              <span data-child="POPULAR GAMES">POPULAR GAMES</span>
              <span data-child="RIGHT NOW">RIGHT NOW</span>
              {/* 반짝이 데코 요소 */}
              <StarEffect count={8} />
            </h1>
          </div>
          <PopularGamesSwiper />
        </div>
      </section>
      {/* ## 핫딜 */}
      <section className="sc-hotdeal">
        <div className="inner">
          <HotdealSwiper />
        </div>
      </section>
      {/* ## what's your favorite game? */}
      <section className="sc-favoriteGame">
        {/* 반짝이 데코 요소 */}
        <StarEffect count={16} />
        <div className="inner">
          <div className="card-group">
            <article
              className="card-item"
              role="region"
              aria-labelledby="game-festival-title-1"
            >
              <header className="card-tit">
                <div className="windoDecoBtn">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <h2>GAME FESTIVAL</h2>
              </header>
              <div className="card-content">
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
            </article>
            <article
              className="card-item fake"
              role="region"
              aria-labelledby="game-festival-title-2"
            >
              <header className="card-tit">
                <div className="windoDecoBtn">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <h2>GAME FESTIVAL</h2>
              </header>
            </article>
          </div>

          <FavoriteGameSwiper />
        </div>
      </section>
      {/* 인기 신제품 */}
      <section className="sc_HowNew sc-howNew">
        <div className="inner">
          <NewGamesSwiper />
        </div>
      </section>
      {/* ## 풋터 상단 마지막 배너 단락 */}
      <section className="sc_lastBanner sc-lastBanner">
        <div className="lastBanner-tit">
          <h2>
            Find more games to play
            <br /> at the game festival!
          </h2>
          <p>게임 페스티발에서 더 많은 게임을 찾아보세요!</p>
        </div>
      </section>
    </main>
  )
}
