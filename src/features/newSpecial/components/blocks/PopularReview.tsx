import { useEffect, useState } from 'react'
import { Swiper, ReviewItem } from '@common/components'
import { useGetHotdealGameList, useGetGameDetail } from '@main/services'

export const PopularReview = () => {
  const { data } = useGetHotdealGameList()
  const [currentGame, setCurrentGame] = useState(data?.[0])
  const { data: detailData } = useGetGameDetail(currentGame?.id || '')

  useEffect(() => {
    if (data) setCurrentGame(data[0])
  }, [data])

  return (
    <div className="popularReview-list">
      <Swiper
        id="ReviewSwiper"
        slidesPerView={3}
        slidesPerGroup={1}
        speed={700}
        spaceBetween={15}
        navigation={false}
        pagination={true}
      >
        {detailData?.top_reviews.map((el, idx) => (
          <ReviewItem reviewData={el} key={idx} variant="card" />
        ))}
      </Swiper>
    </div>
  )
}
