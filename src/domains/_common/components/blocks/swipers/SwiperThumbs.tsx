import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

import swiperButton from '@/assets/imgs/icons/swiper_button_black.svg'

type SwiperThumbsProps = {
  id: string
  children: React.ReactNode[]
  slidesPerView?: number
  spaceBetween?: number
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

export const SwiperThumbs = ({
  id,
  children,
  slidesPerView = 5,
  spaceBetween = 15,
  height,
  className,
}: SwiperThumbsProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  return (
    <figure className={`swiper_thumb ${className}`}>
      <section className="thumbs_wrap">
        <Swiper modules={[Thumbs]} thumbs={{ swiper: thumbsSwiper }}>
          {children.map((el) => (
            <SwiperSlide>
              <div className="content">{el}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="slide_wrap">
        <Swiper
          modules={[Thumbs, Navigation]}
          watchSlidesProgress
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          onSwiper={(swiper) => setThumbsSwiper(swiper)}
          navigation={{
            nextEl: `#${id}next`,
            prevEl: `#${id}prev`,
          }}
        >
          {children.map((el) => (
            <SwiperSlide>
              <div className="content">{el}</div>
            </SwiperSlide>
          ))}
        </Swiper>
        <SwiperButton id={id} direction="prev" />
        <SwiperButton id={id} direction="next" />
      </section>
    </figure>
  )
}
