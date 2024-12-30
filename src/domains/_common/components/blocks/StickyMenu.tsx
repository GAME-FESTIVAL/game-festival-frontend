import { Link } from 'react-router-dom'

//--------------- 이미지 ---------------//
import homeIcon from '@/assets/imgs/sub/sticky/img_home_icon.png'
import icon1 from '@/assets/imgs/sub/sticky/img_stickyMenu_icon1.png'
import icon2 from '@/assets/imgs/sub/sticky/img_stickyMenu_icon2.png'
import icon3 from '@/assets/imgs/sub/sticky/img_stickyMenu_icon3.png'
import icon4 from '@/assets/imgs/sub/sticky/img_stickyMenu_icon4.png'
import icon5 from '@/assets/imgs/sub/sticky/img_stickyMenu_icon5.png'
import icon6 from '@/assets/imgs/sub/sticky/img_stickyMenu_icon6.png'
import icon7 from '@/assets/imgs/sub/sticky/img_stickyMenu_icon7.png'
import icon8 from '@/assets/imgs/sub/sticky/img_stickyMenu_icon8.png'

export const StickyMenu = () => {
  const StickyMainMenus = [
    { path: '/new-special', title: '신규 및 특집' },
    { path: '/', title: '찾아보기' },
    { path: '/news', title: '뉴스' },
  ]
  const StickySubMenus = [
    { path: '/home', title: '홈' },
    { path: '/my-account', title: '내 계정' },
    { path: '/wishlist', title: '위시리스트' },
    { path: '/cart', title: '장바구니' },
    { path: '/logout', title: '회원 탈퇴' },
  ]

  const MainMenusIcons = [icon1, icon2, icon3]
  const SubMenusIcons = [icon4, icon5, icon6, icon7, icon8]

  return (
    <div className="sticky">
      <div className="top_gnb">
        <ul>
          {StickyMainMenus.map((el, index) => (
            <li key={`main-${index}`}>
              <Link to={el.path}>
                <img src={MainMenusIcons[index]} alt={`${el.title} 아이콘`} />
                {el.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="bott_subMenu">
        <div className="myAccount">
          <div className="profile">q</div>
          <Link to="/home" className="profile_name">
            qwerNickname
            <img src={homeIcon} alt="" />
          </Link>
        </div>
        <ul className="subMenuList">
          {StickySubMenus.map((el, index) => (
            <li key={`sub-${index}`}>
              <Link to={el.path}>
                <img src={SubMenusIcons[index]} alt={`${el.title} 아이콘`} />
                {el.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
