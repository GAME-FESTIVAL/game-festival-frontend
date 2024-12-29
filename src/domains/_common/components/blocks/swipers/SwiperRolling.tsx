import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

type SwiperRollingProps = {
  id: string
  children: React.ReactNode[]
  slidesPerView?: number
  slidePerGroup?: number
  pagination?: boolean
  speed?: number
  reverseDirection?: boolean
  height?: string
  title?: string
  className?: string
}

export const SwiperRolling = ({
  id,
  children,
  slidesPerView = 3,
  slidePerGroup = 1,
  pagination,
  speed = 1000,
  reverseDirection = false,
  height = 'auto',
  title,
  className,
  ...props
}: SwiperRollingProps) => {
  return (
    <figure className={`swiper_rolling ${className}`} style={{ height }}>
      <Swiper
        slidesPerView={slidesPerView}
        slidesPerGroup={slidePerGroup}
        pagination={
          pagination && {
            clickable: true,
          }
        }
        className="swiper_container"
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: reverseDirection,
        }}
        speed={speed}
        loop={true}
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
