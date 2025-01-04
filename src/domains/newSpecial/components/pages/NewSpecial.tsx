import {
  PopularNewGames,
  NewProductGames,
  UpcomingGames,
  UpcomingList,
} from '@newSpecial/components'
import { GameSlider } from '@newSpecial/components'

export const NewSpecial = () => {
  return (
    <main id="newSpecial" className="inner">
      {/* 메인 게임 슬라이드 */}
      <section className="sc_gameSlider">
        <GameSlider />
      </section>

      {/* 인기 신규 출시 게임 */}
      <section className="sc_newGames">
        <div className="tit">인기 신규 출시 게임</div>
        <PopularNewGames />
      </section>

      {/* 추천 신규 제품 > 덜 작업함 */}
      <section className="sc_newProduct">
        <NewProductGames />
      </section>

      {/* 출시 예정 > 덜 작업함 */}
      <section className="sc_upcoming ">
        <UpcomingGames />
      </section>

      {/* 출시 예정 게임 리스트 >  */}
      <section className="sc_upcomingList">
        <UpcomingList />
      </section>
    </main>
  )
}
