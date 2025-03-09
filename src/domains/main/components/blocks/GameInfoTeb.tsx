import { getDiscountedPrice } from '@common/utils'
import star from '@/assets/imgs/common/star.png'

export const GameInfoTeb = ({
  gameInfo,
}: {
  gameInfo?: MainTypes.GetGameDetail.Response
}) => {
  return (
    <div className="HowNew_gameInfo active">
      <div className="game_info">
        <div className="game_txt">
          <p className="game_name">{gameInfo?.title}</p>
          <div className="game_price">
            {!!gameInfo?.discount_rate && (
              <div className="discountPercent_red">
                -{gameInfo?.discount_rate}%
              </div>
            )}
            <div className="left-column">
              <span className="original discounted">
                ₩{gameInfo?.price.toLocaleString('ko-KR')}
              </span>
              {!!gameInfo?.discount_rate && (
                <span className="sale">
                  ₩
                  {getDiscountedPrice(gameInfo?.price, gameInfo?.discount_rate)}
                </span>
              )}
            </div>
          </div>
          <div className="total_score">
            <img src={star} alt="" />
            <div>
              <span>종합 평가:</span>
              <p>
                {gameInfo?.rating_summary}
                <span>
                  (총 평가수: {gameInfo?.review_count.toLocaleString('ko-KR')})
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="game_img">
        {/* 여러 개의 이미지를 표시 */}
        {gameInfo?.thumbnail_urls?.slice(0, 4).map((url, index) => (
          <img key={index} src={`assets/imgs/thumbnails/${url}`} alt={url} />
        ))}
      </div>
    </div>
  )
}
