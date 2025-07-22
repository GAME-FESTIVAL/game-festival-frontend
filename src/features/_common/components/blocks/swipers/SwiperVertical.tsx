import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Mousewheel } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

type SwiperVerticalProps = {
  id: string
  children?: React.ReactNode[]
  slidesPerView?: number
  spaceBetween?: number
  height?: number
  className?: string
  autoHeight?: boolean
}

export const SwiperVertical = ({
  id,
  children,
  slidesPerView = 1,
  spaceBetween = 10,
  className,
  autoHeight = false,
  ...props
}: SwiperVerticalProps) => {
  //   const slideHeight = height
  //   const totalHeight = `${
  //     slideHeight * slidesPerView + (slidesPerView - 1) * spaceBetween
  //   }px`

  return (
    <figure
      className={`swiper_vertical ${className}`}
      //   style={{
      //     height: totalHeight,
      //   }}
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
        autoHeight={autoHeight as any}
        {...props}
      >
        {children?.map((el, idx) => (
          <SwiperSlide key={`${id}${idx}`}>{el}</SwiperSlide>
        ))}
      </Swiper>
    </figure>
  )
}
