import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

import swiperButton from '@/assets/imgs/icons/swiper_button.svg'

type SwiperProgressPropsType = {
  id: string
  children: React.ReactNode[]
  slidesPerView?: number
  slidesPerGroup?: number
  height?: string
  className?: string
}

const SwiperButton = ({ id, direction }: { id: string; direction: string }) => {
  return (
    <button
      id={`${id}${direction}`}
      className={`swiper_custom_button_${direction}`}
    >
      <img src={swiperButton} alt="" />
    </button>
  )
}

export const SwiperProgress = ({
  id,
  children,
  slidesPerView = 5,
  slidesPerGroup = 1,
  height = 'auto',
  className,
  ...props
}: SwiperProgressPropsType) => {
  return (
    <figure className={`swiper_progress ${className}`} style={{ height }}>
      <Swiper
        pagination={{ type: 'progressbar' }}
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
        <SwiperButton id={id} direction="prev" />
        <SwiperButton id={id} direction="next" />
        {children?.map((el) => (
          <SwiperSlide>
            <div className="content">{el}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </figure>
  )
}
