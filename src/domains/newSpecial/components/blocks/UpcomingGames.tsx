import { Link } from 'react-router-dom'

// --------------- 이미지 --------------- //
import upcomingGamesImg1 from '@/assets/imgs/temp/sub_upcomingGames_img1.png'
import upcomingGamesImg2 from '@/assets/imgs/temp/sub_upcomingGames_img2.png'
import upcomingGamesImg3 from '@/assets/imgs/temp/sub_upcomingGames_img3.png'

// 데이터 배열
const upcomingGamesData = [
  { id: 1, img: upcomingGamesImg1 },
  { id: 2, img: upcomingGamesImg2 },
  { id: 3, img: upcomingGamesImg3 },
]

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
