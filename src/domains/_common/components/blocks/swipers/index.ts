import { SwiperBasic } from './SwiperBasic'
import { SwiperProgress } from './SwiperProgress'
import { SwiperVertical } from './SwiperVertical'
import { SwiperThumbs } from './SwiperThumbs'
import { SwiperRolling } from './SwiperRolling'

const Swiper = Object.assign(SwiperBasic, {
  Progress: SwiperProgress,
  Vertical: SwiperVertical,
  Thubms: SwiperThumbs,
  Rolling: SwiperRolling,
})

export { Swiper }
