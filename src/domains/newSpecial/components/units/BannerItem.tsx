import { Link } from 'react-router-dom'

// ## 배너 컴포넌트
export const BannerItem = ({
  img,
  name,
  description,
  price,
}: NewSpecialTypes.BannerData) => (
  <Link to="/" className="banner_item">
    <div className="banner_img">
      <img src={img} alt={name} />
    </div>
    <div className="game_info">
      <p className="game_name">{name}</p>
      <div className="game_description">{description}</div>
      <div className="game_price">
        <span className="original">{price}</span>
      </div>
    </div>
  </Link>
)
