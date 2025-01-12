import { Link } from 'react-router-dom'
import { Swiper } from '@common/components'
import { upcomingGamesData } from '@newSpecial/constants'

export const UpcomingGames = () => {
  return (
    <Swiper
      id="upcomingGamesSwiper"
      title="출시 예정"
      slidesPerView={3}
      slidesPerGroup={1}
      navigation={false}
      className="newProduct_swiper"
    >
      {upcomingGamesData.map((game) => (
        <Link to="" key={game.id} className="upcomingGames_element">
          <div className="game_img">
            <img
              src={game.img}
              alt={`Upcoming game ${game.id}`}
              className="full cover"
            />
          </div>
        </Link>
      ))}
    </Swiper>
  )
}
