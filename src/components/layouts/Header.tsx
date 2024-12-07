import { Link } from 'react-router-dom'

// 이미지
import logo from '@/assets/imgs/main/logo.png'
import search from '@/assets/imgs/main/search.png'

export const Header = () => {
  return (
    <header className="header">
      <div className="inner">
        <div className="left_column">
          <form action="">
            <img src={logo} alt="logo" className="logo" />
            <div className="search_box">
              <input type="text" name="" />
              <button className="search_btn" type="submit">
                <img src={search} alt="검색" />
              </button>
            </div>
          </form>
        </div>
        <div className="right_column">
          <ul className="menu">
            <li>
              <Link to="/new-special">신규 및 특집</Link>
              <Link to="/">찾아보기</Link>
              <Link to="/news">뉴스</Link>
            </li>
          </ul>
          <ul className="signIn">
            <li>
              <Link to="/login">로그인</Link>
              <Link to="/join">회원가입</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
export default Header
