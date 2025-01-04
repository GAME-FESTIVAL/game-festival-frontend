import { Link } from 'react-router-dom'
import { upcomingGamesData } from '@newSpecial/constants'

export const UpcomingGames = () => {
  return (
    <div className="upcomingGames_list">
      {upcomingGamesData.map((game) => (
        <Link to="" key={game.id} className="upcomingGames_element">
          <div className="game_img">
            <img src={game.img} alt={`Upcoming game ${game.id}`} />
          </div>
        </Link>
      ))}
    </div>
  )
}
