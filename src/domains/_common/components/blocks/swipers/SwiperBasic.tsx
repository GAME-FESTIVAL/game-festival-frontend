import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

import swiperButton from '@/assets/imgs/icons/swiper_button.svg'

type SwiperProgressProps = {
  id: string
  children: React.ReactNode[]
  slidesPerView?: number
  slidesPerGroup?: number
  height?: string
  className?: string
}

const SwiperButton = ({ direction, id }: { direction: string; id: string }) => {
  return (
    <button
      id={`${id}${direction}`}
      className={`swiper_custom_button_${direction}`}
    >
      <img src={swiperButton} alt="" />
    </button>
  )
}

export const SwiperBasic = ({
  id,
  children,
  slidesPerView = 5,
  slidesPerGroup = 1,
  height = 'auto',
  className,
  ...props
}: SwiperProgressProps) => {
  return (
    <figure className={`swiper_basic ${className}`} style={{ height }}>
      <Swiper
        modules={[Pagination, Navigation]}
        navigation={{
          nextEl: `#${id}next`,
          prevEl: `#${id}prev`,
        }}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        className="swiper_container"
        {...props}
      >
        <SwiperButton direction="prev" id={id} />
        <SwiperButton direction="next" id={id} />
        {children?.map((el) => (
          <SwiperSlide>
            <div className="content">{el}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </figure>
  )
}
