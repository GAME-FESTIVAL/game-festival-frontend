import profileBasicImage from '@/assets/imgs/common/profileImage_basic.png'
import star from '@/assets/imgs/common/star.png'

type ReviewItemProps = {
  reviewData: {
    id: string
    parent_id: string
    name: string
    totalReviews: number
    content: string
    rating: number
  }
}

export const ReviewItem = ({ reviewData }: ReviewItemProps) => {
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
              평가 작성 수 {reviewData.totalReviews}
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
