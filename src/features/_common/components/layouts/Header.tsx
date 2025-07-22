import { Link } from 'react-router-dom'

//--------------- 이미지 ---------------//
import logo from '@/assets/imgs/common/logo.png'
import search from '@/assets/imgs/common/layout/search.png'
import menuBtn from '@/assets/imgs/common/layout/menuBtn.png'

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
        <div className="header-util left_column">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <form action="">
            <div className="header-util-search search_box show-pc">
              <input type="text" name="" />
              <button
                className="header-util-search-btn search_btn"
                type="submit"
              >
                <img src={search} alt="검색" />
              </button>
            </div>
          </form>
        </div>
        <div className="header-nav-wrap right_column show-pc">
          <nav className="header-gnb">
            <ul className="header-gnb-list menu">
              {headerMainMenus.map((el) => (
                <li>
                  <Link key={el.path} to={el.path}>
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="header-auth signIn">
              {headerAuthMenus.map((el) => (
                <li>
                  <Link key={el.path} to={el.path}>
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="right_column show-mo show-ta">
          <img src={menuBtn} alt="" />
        </div>
      </div>
    </header>
  )
}
