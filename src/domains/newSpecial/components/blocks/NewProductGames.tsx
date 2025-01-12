import { Link } from 'react-router-dom'
import { Swiper } from '@common/components'
import { newProductGamesData } from '@newSpecial/constants'

export const NewProductGames = () => {
  return (
    <Swiper
      id="newProductGamesSwiper"
      title="추천 신규 제품"
      slidesPerView={5}
      speed={700}
      slidesPerGroup={5}
      className="newProduct_swiper"
      loop={true}
    >
      {newProductGamesData.map((game) => (
        <Link to="">
          <div className="game_img">
            <img src={game.img} alt={game.name} className="full cover" />
          </div>
        </Link>
      ))}
    </Swiper>
  )
}
