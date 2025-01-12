import { Link } from 'react-router-dom'

// ## 게임 탭 리스트 컴포넌트
export const GameCard = ({
  img,
  name,
  tags,
  price,
}: NewSpecialTypes.GameData) => (
  <Link to="/" className="tab_game_item">
    <div className="game_img">
      <img src={img} alt={name} />
      {price.discount && (
        <span className="discountPercent">{price.discount}</span>
      )}
    </div>
    <div className="game_info">
      <p className="game_name">{name}</p>
      <ul className="game_tag hashtag">
        {tags.map((tag, index) => (
          <li key={index}>#{tag}</li>
        ))}
      </ul>
      <div className="game_price">
        {price.sale && <span className="sale">{price.sale}</span>}
        <span className={`original ${price.sale ? 'discounted' : ''}`}>
          {price.original}
        </span>
      </div>
    </div>
  </Link>
)
