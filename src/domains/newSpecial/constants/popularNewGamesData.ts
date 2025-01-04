import newGameImg1 from '@/assets/imgs/temp/sub_newGame_gameImg1.png'
import newGameImg2 from '@/assets/imgs/temp/sub_newGame_gameImg2.png'
import newGameImg3 from '@/assets/imgs/temp/sub_newGame_gameImg3.png'
import newGameImg4 from '@/assets/imgs/temp/sub_newGame_gameImg4.png'

export const popularNewGamesData: NewSpecialTypes.GameData[] = [
  {
    img: newGameImg1,
    name: 'Call of Duty®: Black Ops 6',
    tags: ['액션', '멀티플레이어', '슈팅', '1인칭 슈팅'],
    price: { original: '₩84,500' },
  },
  {
    img: newGameImg2,
    name: 'Albatroz',
    tags: ['RPG', '탐험', '생존', '몰입형 시뮬레이션'],
    price: { sale: '₩28,800', original: '₩32,000', discount: '-10%' },
  },
  {
    img: newGameImg3,
    name: 'Dragon Age™: The Veilguard',
    tags: ['LGBTQ+', '판타지', '싱글 플레이어', 'RPG'],
    price: { original: '₩66,000' },
  },
  {
    img: newGameImg4,
    name: 'Vampire Hunters',
    tags: ['액션 로그라이크', '1인칭 슈팅', '탄막 슈팅'],
    price: { sale: '₩12,370', original: '₩16,500', discount: '-25%' },
  },
]
