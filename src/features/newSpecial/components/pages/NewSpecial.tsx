import {
  PopularNewGames,
  NewProductGames,
  PoPularFreeGames,
  UpcomingGames,
  UpcomingList,
  PopularReview,
  RecommendedGames,
} from '@newSpecial/components'
import { GameSlider } from '@newSpecial/components'

export const NewSpecial = () => {
  return (
    <main id="newSpecial">
      {/* 메인 게임 슬라이드 */}
      <section className="sc_gameSlider">
        <GameSlider />
      </section>

      {/* 인기 신규 출시 게임 */}
      <section className="sc_newGames">
        <div className="tit">인기 신규 출시 게임</div>
        <PopularNewGames variant="main" />
      </section>

      {/* 추천 신규 제품 > 덜 작업함 */}
      <section className="sc_newProduct">
        <NewProductGames />
      </section>

      {/* 출시 예정 */}
      <section className="sc_upcoming ">
        <UpcomingGames />
      </section>

      {/* 출시 예정 게임 리스트 */}
      <section className="sc_upcomingList">
        <UpcomingList />
      </section>

      {/* 인기 리뷰 추천 */}
      <section className="sc_popularReview">
        <div className="tit">인기 리뷰 추천</div>
        <PopularReview />
      </section>

      {/* 인기 무료 게임 -> 추천 신규 제품 NewProductGames 긁어옴 */}
      <section className="sc_popularFree">
        <PoPularFreeGames variant="free" />
      </section>

      {/* 추천 게임 리스트 */}
      <section className="sc_recommendedGames">
        <RecommendedGames />
      </section>
    </main>
  )
}
