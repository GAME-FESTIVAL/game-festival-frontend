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
      <p className="review-content">{reviewData.content}</p>
      <div className="review-wrap">
        <div className="review-author-info">
          <img
            src={profileBasicImage}
            alt={`${reviewData.name}의 프로필 사진`}
            className="author-avatar"
          />
          <div>
            <h3 className="author-name">{reviewData.name}</h3>
            <span className="author-review-count">
              평가 작성 수 {reviewData.total_reviews}
            </span>
          </div>
        </div>
        <div
          className="review-rating"
          aria-label={`평점: ${reviewData.rating}점`}
        >
          <img src={star} alt="" aria-hidden="true" className="rating-stars" />
          <span className="rating-score">{reviewData.rating}</span>
        </div>
      </div>
    </>
  )
}
