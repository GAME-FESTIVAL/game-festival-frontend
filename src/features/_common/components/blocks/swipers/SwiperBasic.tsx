import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'
import { Pagination, Navigation, Grid } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

import swiperButton from '@/assets/imgs/icons/swiper_basic_button.svg'

type SwiperProgressProps = SwiperProps & {
  id: string
  children?: React.ReactNode[]
  slidesPerView?: number
  slidesPerGroup?: number
  pagination?: boolean
  navigation?: boolean
  title?: string
  className?: string
}

const SwiperButton = ({ direction, id }: { direction: string; id: string }) => {
  return (
    <button
      id={`${id}${direction}`}
      className={`swiper_custom_button ${direction}`}
    >
      <img src={swiperButton} alt="" />
    </button>
  )
}

export const SwiperBasic = ({
  id,
  children,
  slidesPerView = 3,
  slidesPerGroup = 1,
  pagination,
  navigation = true,
  title,
  className,
  ...props
}: SwiperProgressProps) => {
  return (
    <figure className={`swiper_basic ${className}`}>
      <header className="swiper-header tab-game-header">
        {title && <h2 className="swiper_title">{title}</h2>}
        {navigation && (
          <div className="swiper-nav-group tab-game-nav">
            <SwiperButton id={id} direction="prev" />
            <SwiperButton id={id} direction="next" />
          </div>
        )}
      </header>

      <Swiper
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        pagination={
          pagination && {
            clickable: true,
          }
        }
        spaceBetween={20}
        modules={[Pagination, Navigation, Grid]}
        navigation={{
          nextEl: `#${id}next`,
          prevEl: `#${id}prev`,
        }}
        className="swiper_container tab-game-container"
        {...props}
      >
        {children?.map((el, idx) => (
          <SwiperSlide key={`${id}${idx}`} className="game-slide">
            <section className="game-item-wrap">{el}</section>
          </SwiperSlide>
        ))}
      </Swiper>
    </figure>
  )
}
