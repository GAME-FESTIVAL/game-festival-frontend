import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Mousewheel } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

type SwiperVerticalProps = {
  id: string
  children?: React.ReactNode[]
  slidesPerView?: number
  spaceBetween?: number
  height: number
  className?: string
}

export const SwiperVertical = ({
  id,
  children,
  slidesPerView = 5,
  spaceBetween = 10,
  height,
  className,
  ...props
}: SwiperVerticalProps) => {
  const slideHeight = height
  const totalHeight = `${
    slideHeight * slidesPerView + (slidesPerView - 1) * spaceBetween
  }px`

  return (
    <figure
      className={`swiper_vertical ${className}`}
      style={{
        height: totalHeight,
      }}
    >
      <Swiper
        direction={'vertical'}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
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
