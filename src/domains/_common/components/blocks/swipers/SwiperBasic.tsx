import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'
import { Pagination, Navigation, Grid } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

import swiperButton from '@/assets/imgs/icons/swiper_button.svg'

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
      <div className="swiper_header">
        {title && <h1 className="swiper_title">{title}</h1>}
        {navigation && (
          <div className="swiper_button_group">
            <SwiperButton id={id} direction="prev" />
            <SwiperButton id={id} direction="next" />
          </div>
        )}
      </div>

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
        className="swiper_container"
        {...props}
      >
        {children?.map((el) => (
          <SwiperSlide>
            <div className="content">{el}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </figure>
  )
}
