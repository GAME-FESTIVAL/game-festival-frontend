import { Link } from 'react-router-dom'
import { Swiper, BannerItem } from '@common/components'
import { newProductGamesData } from '@newSpecial/constants'
import { NewBannerData, FreeBannerData } from '@common/constants'

export const PoPularFreeGames = ({
  variant = 'free',
}: {
  variant?: 'main' | 'free'
}) => {
  const getBannerByVariant = (variant: 'main' | 'free') => {
    if (variant === 'free') return FreeBannerData
    return NewBannerData
  }

  const banners = getBannerByVariant(variant)

  return (
    <>
      <Swiper
        id="newProductGamesSwiper"
        title="인기 무료 게임"
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
      <div className="banner_area">
        {banners.map((banner, index) => (
          <BannerItem key={index} {...banner} />
        ))}
      </div>
    </>
  )
}
