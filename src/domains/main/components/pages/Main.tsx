import React, { useEffect, useState } from 'react'

//--------------- 이미지 ---------------//
/* sc_hero 키비주얼 영역 */
// ##1. 상·하단 흐르는 배너
import icon1 from '@/assets/imgs/main/img_hero_icon1.png'
import icon2 from '@/assets/imgs/main/img_hero_icon2.png'
import icon3 from '@/assets/imgs/main/img_hero_icon3.png'
// ##2. 가운데 콘텐츠
import window1 from '@/assets/imgs/main/img_hero_window1.png'
import window2 from '@/assets/imgs/main/img_hero_window2.png'
import window3 from '@/assets/imgs/main/img_hero_window3.png'

//--------------- 중복 배너 ---------------//
// ##1. BannerItem 인터페이스 정의
interface BannerItem {
  text: string
  icon: string
  alt: string
}
// ##2. Banner 컴포넌트
const Banner = ({
  items,
  direction,
}: {
  items: BannerItem[]
  direction: 'left' | 'right'
}) => {
  return (
    <div className={`banner_line ${direction}`}>
      <div className="roller_wrap">
        <div className="rolling_list">
          {items.map((item, index) => (
            <div key={`${direction}-${index}`}>
              <p>{item.text}</p>
              <img src={item.icon} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
// ##3. BannerItem 배열 선언
const bannerItemsList: BannerItem[] = [
  { text: 'LET’S LOOK FOR A GAME!', icon: icon1, alt: '아이콘1' },
  { text: 'LET’S LOOK FOR A GAME!', icon: icon2, alt: '아이콘2' },
  { text: 'LET’S LOOK FOR A GAME!', icon: icon3, alt: '아이콘3' },
]

export const Main = () => {
  const [overlapItems, setOverlapItems] = useState<BannerItem[]>([])

  useEffect(() => {
    // ##4. 아이템 복제
    setOverlapItems([...bannerItemsList, ...bannerItemsList])
  }, [])

  useEffect(() => {
    // ##5. overlapItems가 업데이트된 후 복제 수행
    if (overlapItems.length > 0) {
      const rollers = document.querySelectorAll<HTMLDivElement>('.roller_wrap')
      rollers.forEach((roller, index) => {
        const rollingList =
          roller.querySelector<HTMLDivElement>('.rolling_list')
        if (rollingList) {
          const clone = rollingList.cloneNode(true) as HTMLDivElement
          clone.id = `roller${index + 1}_clone`
          roller.appendChild(clone)
          rollingList.classList.add('original')
          clone.classList.add('clone')
        }
      })
    }
  }, [overlapItems]) // overlapItems가 변경될 때 실행

  //--------------- 현재 날짜/시간 구하기 ---------------//
  useEffect(() => {
    // ##1. 날짜 및 시간 설정
    const updateDateTime = () => {
      const today = new Date()

      // ##1-1. 날짜 구하기
      const year = today.getFullYear()
      const month = String(today.getMonth() + 1).padStart(2, '0')
      const day = String(today.getDate()).padStart(2, '0')

      const todayText = document.querySelector<HTMLDivElement>('.today')
      if (todayText) {
        todayText.textContent = `${month}/${day}/${year}`
      }
      // ##1-2. 시간 구하기
      const hours = String(today.getHours()).padStart(2, '0')
      const minutes = String(today.getMinutes()).padStart(2, '0')
      const seconds = String(today.getSeconds()).padStart(2, '0')

      const todayTimeText = document.querySelector<HTMLDivElement>('.time')
      if (todayTimeText) {
        todayTimeText.textContent = `${hours}:${minutes}:${seconds}`
      }
    }

    updateDateTime()
    const getClock = setInterval(updateDateTime, 1000)

    return () => clearInterval(getClock)
  }, [])

  return (
    <main className="main">
      <section className="sc_hero">
        {/* 상단 배너 */}
        <Banner items={overlapItems} direction="left" />

        {/* 가운데 콘텐츠 */}
        <div className="inner">
          <div className="left_column">
            <div className="tit">
              <h1 className="childText">
                <p data-child="GAME">GAME</p>
                <p data-child="FESTIVAL">FESTIVAL</p>
              </h1>
              <div className="getDate">
                <p className="today"></p>
                <p className="time"></p>
              </div>
              <div className="star"></div>
            </div>
          </div>
          <div className="right_column">
            <div>
              <img src={window1} alt="데코1" />
            </div>
            <div>
              <img src={window2} alt="데코2" />
            </div>
            <div>
              <img src={window3} alt="데코3" />
            </div>
          </div>
        </div>

        {/* 하단 배너 */}
        <Banner items={overlapItems} direction="right" />
      </section>
    </main>
  )
}
