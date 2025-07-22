import { useEffect, useState } from 'react'
import { Swiper, ReviewItem } from '@common/components'
import { formatDate } from '@common/utils'
import { useGetHotdealGameList, useGetGameDetail } from '@main/services'
import main_hotdeal_slide_img_1 from '@/assets/imgs/temp/main_hotdeal_slide_img_1.png'

export const HotdealSwiper = () => {
  const { data } = useGetHotdealGameList()
  const [currentGame, setCurrentGame] = useState(data?.[0])
  const { data: detailData } = useGetGameDetail(currentGame?.id || '')

  useEffect(() => {
    if (data) setCurrentGame(data[0])
  }, [data])

  return (
    <figure className="hotdeal_swiper_wrap hotdeal-container">
      <div className="hotdeal-game-select">
        <h1 className="childText small" aria-label="HOT DEAL">
          <span data-child="HOT DEAL">HOT DEAL</span>
        </h1>
        <Swiper.Vertical
          id="mainVerticalSwiper"
          className="hotdeal-game-select-wrap"
          //   spaceBetween={15}
          //   height={140}
          autoHeight={true}
        >
          {data?.map((el, idx) => (
            <div
              key={idx}
              className={`hotdeal-game-select-item ${
                currentGame?.id === el.id ? 'active' : ''
              }`}
              onClick={() => setCurrentGame(data[idx])}
            >
              <div className="game-info">
                <h2 className="game-name">{el.title}</h2>
                <p className="game-description">{el.desc}</p>
              </div>
              <section className="game-img">
                <img src={main_hotdeal_slide_img_1} alt={el.title} />
              </section>
            </div>
          ))}
        </Swiper.Vertical>
      </div>

      <div className="hotdeal-game-select-content">
        <div className="game-current">
          {detailData && (
            <Swiper.Thubms id={`mainThumbsSwiper${detailData.id}`}>
              {detailData?.thumbnail_urls.map((url, idx) => (
                <div className="slide_wrap" key={idx}>
                  <img src={`assets/imgs/thumbnails/${url}`} alt="" />
                </div>
              ))}
            </Swiper.Thubms>
          )}

          <div className="game-current-info">
            <h2 className="game-name">{detailData?.title}</h2>
            <p className="game-description">{detailData?.desc}</p>
            <p className="game-release-date">
              출시일 : {formatDate(detailData?.release_at, 'yyyy. MM. dd')}{' '}
            </p>
          </div>
        </div>
        <div className="review-collection">
          <Swiper
            id="ReviewSwiper"
            slidesPerView={3.5}
            slidesPerGroup={1}
            spaceBetween={15}
            navigation={false}
          >
            {detailData?.top_reviews.map((el, idx) => (
              <ReviewItem reviewData={el} key={idx} />
            ))}
          </Swiper>
        </div>
      </div>
    </figure>
  )
}
