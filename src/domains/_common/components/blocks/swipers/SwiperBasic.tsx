import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

import swiperButton from '@/assets/imgs/icons/swiper_button.svg'

type SwiperProgressProps = {
  id: string
  children: React.ReactNode[]
  slidesPerView?: number
  slidePerGroup?: number
  pagination?: boolean
  height?: string
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
  slidePerGroup = 1,
  pagination,
  height = 'auto',
  title,
  className,
  ...props
}: SwiperProgressProps) => {
  return (
    <figure className={`swiper_basic ${className}`} style={{ height }}>
      <div className="swiper_header">
        <h1 className="swiper_title">{title}</h1>
        <div className="swiper_button_group">
          <SwiperButton id={id} direction="prev" />
          <SwiperButton id={id} direction="next" />
        </div>
      </div>

      <Swiper
        slidesPerView={slidesPerView}
        slidesPerGroup={slidePerGroup}
        pagination={
          pagination && {
            clickable: true,
          }
        }
        modules={[Pagination, Navigation]}
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
