import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { newProductGamesData } from '@newSpecial/constants'

export const NewProductGames = () => {
  return (
    <Swiper
      slidesPerView={5}
      speed={700}
      slidesPerGroup={5}
      className="newProduct_swiper"
      loop={true}
    >
      {newProductGamesData.map((game) => (
        <SwiperSlide>
          <Link to="">
            <div className="game_img">
              <img src={game.img} alt={game.name} />
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
