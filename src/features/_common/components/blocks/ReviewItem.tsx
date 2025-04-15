import profileBasicImage from '@/assets/imgs/common/profileImage_basic.png'
import star from '@/assets/imgs/common/star.png'

// 템프 이미지
import popularReviewImg1 from '@/assets/imgs/temp/sub_popularReview_img1.png'

type ReviewItemProps = {
  reviewData: {
    id: string
    parent_id: string
    name: string
    total_reviews: number
    content: string
    rating: number
  }
  variant?: 'box' | 'card'
}

export const ReviewItem = ({
  reviewData,
  variant = 'box',
}: ReviewItemProps) => {
  // 신규 및 특집 -> [인기 리뷰 추천] 영역 UI 분기 처리
  if (variant === 'card') {
    return (
      <div className="popularReview-card">
        <div className="popularReview-card-inner">
          <div className="popularReview-card-header">
            <div className="profile-image"></div>
            <div className="profile-written">
              <div className="name">{reviewData.name}</div>
              <div className="date">2024-11-03</div>
            </div>
          </div>
          <div className="popularReview-card-content">
            <div className="content">{reviewData.content}</div>
            <div className="thumb">
              <img src={popularReviewImg1} alt="" />
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      <div className="review_text">{reviewData.content}</div>
      <div className="reviewer_info">
        <div className="left_column">
          <div className="profile_image">
            <img src={profileBasicImage} alt="프로필 이미지" />
          </div>
          <div className="reviewer">
            <div className="name">{reviewData.name}</div>
            <div className="reviewCount">
              평가 작성 수 {reviewData.total_reviews}
            </div>
          </div>
        </div>
        <div className="right-column">
          <img src={star} alt="평점" /> {reviewData.rating}
        </div>
      </div>
    </>
  )
}
