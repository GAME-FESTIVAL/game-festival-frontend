import { SwiperBasic } from './SwiperBasic'
import { SwiperProgress } from './SwiperProgress'
import { SwiperVertical } from './SwiperVertical'
import { SwiperThumbs } from './SwiperThumbs'

const Swiper = Object.assign(SwiperBasic, {
  Progress: SwiperProgress,
  Vertical: SwiperVertical,
  Thubms: SwiperThumbs,
})

export { Swiper }
