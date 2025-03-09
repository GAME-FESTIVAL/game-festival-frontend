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
    <figure className="hotdeal_swiper_wrap">
      <div className="left-column">
        <h1 className="childText small">
          <p data-child="HOT DEAL">HOT DEAL</p>
        </h1>
        <Swiper.Vertical
          id="mainVerticalSwiper"
          className="main_slide_hotdeal"
          spaceBetween={15}
          height={140}
        >
          {data?.map((el, idx) => (
            <div
              key={idx}
              className={`slide_wrap hotDeal_item ${
                currentGame?.id === el.id ? 'active' : ''
              }`}
              onClick={() => setCurrentGame(data[idx])}
            >
              <div className="game_txt">
                <p>{el.title}</p>
                <span>{el.desc}</span>
              </div>
              <section className="img_wrap">
                <img src={main_hotdeal_slide_img_1} alt="" />
              </section>
            </div>
          ))}
        </Swiper.Vertical>
      </div>

      <div className="right-column">
        <div className="game_desc">
          {detailData && (
            <Swiper.Thubms id={`mainThumbsSwiper${detailData.id}`}>
              {detailData?.thumbnail_urls.map((url, idx) => (
                <div className="slide_wrap" key={idx}>
                  <img src={`assets/imgs/thumbnails/${url}`} alt="" />
                </div>
              ))}
            </Swiper.Thubms>
          )}

          <div className="game_txt">
            <p>{detailData?.title}</p>
            <span>
              {detailData?.desc}
              <span className="release_date">
                출시일 : {formatDate(detailData?.release_at, 'yyyy. MM. dd')}{' '}
              </span>
            </span>
          </div>
        </div>
        <div className="review_collection">
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
