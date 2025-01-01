import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'

//--------------- 이미지 ---------------//
import newProductImg1 from '@/assets/imgs/temp/sub_newProduct_gameImg1.png'
import newProductImg2 from '@/assets/imgs/temp/sub_newProduct_gameImg2.png'
import newProductImg3 from '@/assets/imgs/temp/sub_newProduct_gameImg3.png'
import newProductImg4 from '@/assets/imgs/temp/sub_newProduct_gameImg4.png'
import newProductImg5 from '@/assets/imgs/temp/sub_newProduct_gameImg5.png'

const newGameData = [
  {
    name: 'Age of History 3',
    price: { original: '₩84,500' },
    img: newProductImg1,
  },
  {
    name: 'Factorio: Space Age',
    price: { original: '₩40,000', sale: '₩28,800' },
    img: newProductImg2,
  },
  {
    name: 'MechWarrior 5: Clans',
    price: { original: '₩53,500' },
    img: newProductImg3,
  },
  {
    name: 'Neva',
    price: { original: '₩21,500' },
    img: newProductImg4,
  },
  {
    name: 'DayZ Frostline',
    price: { original: '₩34,000' },
    img: newProductImg5,
  },
  {
    name: 'Age of History 3',
    price: { original: '₩84,500' },
    img: newProductImg1,
  },
  {
    name: 'Factorio: Space Age',
    price: { original: '₩40,000', sale: '₩28,800' },
    img: newProductImg2,
  },
]

export const NewProductGames = () => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        speed={700}
        slidesPerGroup={5}
        className="newProduct_swiper"
        loop={true}
      >
        {newGameData.map((game) => (
          <SwiperSlide>
            <Link to="">
              <div className="game_img">
                <img src={game.img} alt={game.name} />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
