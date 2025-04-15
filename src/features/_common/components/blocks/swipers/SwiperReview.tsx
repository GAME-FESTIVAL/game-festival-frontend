import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

import profileBasicImage from '@/assets/imgs/common/profileImage_basic.png'
import star from '@/assets/imgs/common/star.png'

type SwiperProgressProps = SwiperProps & {
  id: string
  children: React.ReactNode[]
  slidesPerView?: number
  slidesPerGroup?: number
  pagination?: boolean
  navigation?: boolean
  title?: string
  className?: string
}

export const SwiperReview = ({
  id,
  children,
  slidesPerView = 3.5,
  slidesPerGroup = 1,
  pagination,
  navigation = true,
  title,
  className,
  ...props
}: SwiperProgressProps) => {
  return (
    <figure className={`swiper_basic`}>
      <Swiper
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        spaceBetween={15}
        modules={[Pagination, Navigation]}
        navigation={{
          nextEl: `#${id}next`,
          prevEl: `#${id}prev`,
        }}
        pagination={{
          el: '.content-dot',
          clickable: true,
        }}
        className="swiper_container"
        {...props}
      >
        {children?.map((_) => (
          <SwiperSlide>
            <div className="content">
              <div className="review_text">
                진짜 재밌습니다 강추합니다 특히 해덕들은 눈 돌아갈듯. 라이트한
                해리포터 유저라도 즐겁게 플레이 가능!
              </div>
              <div className="reviewer_info">
                <div className="left_column">
                  <div className="profile_image">
                    <img src={profileBasicImage} alt="프로필 이미지" />
                  </div>
                  <div className="reviewer">
                    <div className="name">닉네임</div>
                    <div className="reviewCount">평가 작성 수 100</div>
                  </div>
                </div>
                <div className="right-column">
                  <img src={star} alt="평점" /> 4.5
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="content-dot"></div>
    </figure>
  )
}
