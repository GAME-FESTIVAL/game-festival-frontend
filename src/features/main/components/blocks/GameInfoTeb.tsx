import { getDiscountedPrice } from '@common/utils'
import star from '@/assets/imgs/common/star.png'

export const GameInfoTeb = ({
  gameInfo,
}: {
  gameInfo?: MainTypes.GetGameDetail.Response
}) => {
  return (
    <aside className="active game-detail-panel">
      <div className="game_info game-detail-content">
        <h3
          className="game-name game-detail-title"
          aria-labelledby="game-detail-title"
        >
          {gameInfo?.title}
        </h3>
        <div className="game-price game-price-wrap">
          {!!gameInfo?.discount_rate && (
            <p className="game-discountPercent_red">
              -{gameInfo?.discount_rate}%
            </p>
          )}
          <div className="game-current-price">
            {!!gameInfo?.discount_rate && (
              <span className="sale">
                ₩{getDiscountedPrice(gameInfo?.price, gameInfo?.discount_rate)}
              </span>
            )}
            <span className="original discounted">
              ₩{gameInfo?.price.toLocaleString('ko-KR')}
            </span>
          </div>
        </div>
        <div className="game-total-score">
          <img src={star} alt="별 아이콘" />
          <div>
            <strong>종합 평가:</strong>
            <p>
              {gameInfo?.rating_summary}
              <span>
                (총 평가수: {gameInfo?.review_count.toLocaleString('ko-KR')})
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="game-thumbnail-list">
        {/* 여러 개의 이미지를 표시 */}
        {gameInfo?.thumbnail_urls?.slice(0, 4).map((url, index) => (
          <img
            key={index}
            src={`assets/imgs/thumbnails/${url}`}
            alt={gameInfo?.title + `게임 썸네일 ${index + 1}`}
          />
        ))}
      </div>
    </aside>
  )
}
