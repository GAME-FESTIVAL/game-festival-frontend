import { Link } from 'react-router-dom'

// 이미지
import logo from '@/assets/imgs/common/logo.png'
import search from '@/assets/imgs/common/search.png'

export const Header = () => {
  const headerMainMenus = [
    { path: '/new-special', title: '신규 및 특집' },
    { path: '/', title: '찾아보기' },
    { path: '/news', title: '뉴스' },
  ]

  const headerAuthMenus = [
    { path: '/login', title: '로그인' },
    { path: '/join', title: '회원가입' },
  ]

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
              {headerMainMenus.map((el) => (
                <Link key={el.path} to={el.path}>
                  {el.title}
                </Link>
              ))}
            </li>
          </ul>
          <ul className="signIn">
            <li>
              {headerAuthMenus.map((el) => (
                <Link key={el.path} to={el.path}>
                  {el.title}
                </Link>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
