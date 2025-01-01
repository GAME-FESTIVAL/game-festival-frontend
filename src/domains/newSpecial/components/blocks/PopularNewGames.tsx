import { Link } from 'react-router-dom'
import { useState } from 'react'

// --------------- 이미지 --------------- //
import newGameImg1 from '@/assets/imgs/temp/sub_newGame_gameImg1.png'
import newGameImg2 from '@/assets/imgs/temp/sub_newGame_gameImg2.png'
import newGameImg3 from '@/assets/imgs/temp/sub_newGame_gameImg3.png'
import newGameImg4 from '@/assets/imgs/temp/sub_newGame_gameImg4.png'

import newGameBannerImg1 from '@/assets/imgs/temp/sub_newGame_bannerImg1.png'
import newGameBannerImg2 from '@/assets/imgs/temp/sub_newGame_bannerImg2.png'

//--------------- 데이터 정의 ---------------//
type Price = {
  original: string
  sale?: string
  discount?: string
}
type GameData = {
  img: string
  name: string
  tags: string[]
  price: Price
}
type BannerData = {
  img: string
  name: string
  description: string
  price: string
}

//--------------- 데이터 ---------------//
const NewGameData: GameData[] = [
  {
    img: newGameImg1,
    name: 'Call of Duty®: Black Ops 6',
    tags: ['#액션', '#멀티플레이어', '#슈팅', '#1인칭 슈팅'],
    price: { original: '₩84,500' },
  },
  {
    img: newGameImg2,
    name: 'Albatroz',
    tags: ['#RPG', '#탐험', '#생존', '#몰입형 시뮬레이션'],
    price: { sale: '₩28,800', original: '₩32,000', discount: '-10%' },
  },
  {
    img: newGameImg3,
    name: 'Dragon Age™: The Veilguard',
    tags: ['#LGBTQ+', '#판타지', '#싱글 플레이어', '#RPG'],
    price: { original: '₩66,000' },
  },
  {
    img: newGameImg4,
    name: 'Vampire Hunters',
    tags: ['#액션 로그라이크', '#1인칭 슈팅', '#탄막 슈팅'],
    price: { sale: '₩12,370', original: '₩16,500', discount: '-25%' },
  },
]
const tabGameData: GameData[][] = [
  NewGameData.filter((game) => game.price.discount),
  NewGameData.filter((game) => game.tags.some((tag) => tag.includes('#액션'))),
  NewGameData.filter((game) =>
    game.tags.some((tag) => tag.includes('#어드벤처'))
  ),
  NewGameData.filter((game) =>
    game.tags.some((tag) => tag.includes('#캐주얼'))
  ),
  NewGameData.filter((game) => game.tags.some((tag) => tag.includes('#RPG'))),
  NewGameData.filter((game) =>
    game.tags.some((tag) => tag.includes('#시뮬레이션'))
  ),
  NewGameData.filter((game) => game.tags.some((tag) => tag.includes('#전략'))),
  NewGameData.filter((game) =>
    game.tags.some((tag) => tag.includes('#컨트롤러'))
  ),
]

//--------------- 배너 리스트 ---------------//
const BannerData = [
  {
    img: newGameBannerImg1,
    name: '메타포: 리판타지오',
    description:
      '『메타포: 리판타지오』는 국왕 암살 후 돌연 시작된 선거에 휘말려 새로운 왕의 후보자가 된 소년의 운명을 그린 판타지 RPG입니다. 세계를 방랑하며 하루하루를 자유롭게 보내고, 다양한 클래스와 파티를 활용하여 강적과 맞서 싸우세요. "환상이기에 가능한 현실의 여행"이 시작됩니다.',
    price: '₩79,800',
  },
  {
    img: newGameBannerImg2,
    name: 'ZERO Sievert',
    description:
      'ZERO Sievert는 알고리즘에 따라 생성된 황무지를 뒤지고 장비를 약탈하고 황폐해진 세계에 남겨진 것을 탐험하며 도전하는 강렬한 탑다운 익스트랙션 슈터 게임입니다. 여러분에게 불리한 상황이 닥치면, 생존 그 이상의 일을 해내야 할 것입니다…',
    price: '₩21,500',
  },
]

// ## 게임 탭 리스트 컴포넌트
const GameCard = ({ img, name, tags, price }: GameData) => (
  <Link to="/" className="tab_game_item">
    <div className="game_img">
      <img src={img} alt={name} />
      {price.discount && (
        <span className="discountPercent">{price.discount}</span>
      )}
    </div>
    <div className="game_info">
      <p className="game_name">{name}</p>
      <ul className="game_tag hashtag">
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <div className="game_price">
        {price.sale && <span className="sale">{price.sale}</span>}
        <span className={`original ${price.sale ? 'discounted' : ''}`}>
          {price.original}
        </span>
      </div>
    </div>
  </Link>
)

// ## 배너 컴포넌트
const BannerItem = ({ img, name, description, price }: BannerData) => (
  <Link to="/" className="banner_item">
    <div className="banner_img">
      <img src={img} alt={name} />
    </div>
    <div className="game_info">
      <p className="game_name">{name}</p>
      <div className="game_description">{description}</div>
      <div className="game_price">
        <span className="original">{price}</span>
      </div>
    </div>
  </Link>
)

// 메인 컴포넌트
export const PopularNewGames = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }

  return (
    <>
      <div className="tab_area">
        <ul className="tab_list">
          {[
            '특집',
            '액션',
            '어드벤처',
            '캐주얼',
            'RPG',
            '시뮬레이션',
            '전략',
            '컨트롤러',
          ].map((tab, index) => (
            <li
              key={index}
              className={index === activeTab ? 'active' : ''}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </li>
          ))}
        </ul>
        <div className="tab_game">
          {tabGameData.map((games, index) => (
            <div
              key={index}
              className={`tab_game_element ${
                index === activeTab ? 'visible' : ''
              } ${games.length === 0 ? 'notFound' : ''}`}
            >
              {games.length > 0 ? (
                games.map((game, idx) => <GameCard key={idx} {...game} />)
              ) : (
                <p>😥 콘텐츠가 없습니다.</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="banner_area">
        {BannerData.map((banner, index) => (
          <BannerItem key={index} {...banner} />
        ))}
      </div>
    </>
  )
}
