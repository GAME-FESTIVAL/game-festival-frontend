import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { LineDeco } from '@common/components'
import { LineItemsList } from '@common/constants'

// 이미지
import logo from '@/assets/imgs/common/img_footer_logo.png'
import icon from '@/assets/imgs/common/img_footer_icon.png'

export const Footer = () => {
  const FooterLinkMove = [
    { path: '/#test', title: '현재 인기 게임' },
    { path: '/', title: '특가 상품' },
    { path: '/', title: 'What your favorite game?' },
    { path: '/', title: '인기 신제품' },
  ]

  return (
    <footer className="footer comm_container">
      <div className="inner">
        <div className="top_column">
          <p>GAME</p>
          <img src={logo} alt="logo" />
        </div>
        <div className="bott_column">
          {/* 좌측 꾸밈 컨텐츠 */}
          <div className="etc">
            <LineDeco lineType="first" items={LineItemsList.first} />
            <LineDeco lineType="second" items={LineItemsList.second} />
            <LineDeco lineType="third" items={LineItemsList.third} />
          </div>
          {/* 우측 링크, 이메일 컨텐츠 */}
          <ul className="main_section_link">
            <li className="link">
              {FooterLinkMove.map((el) => (
                <Link key={el.path} to={el.path}>
                  {el.title}
                </Link>
              ))}
            </li>
            <li className="email">
              <img src={icon} alt="" />
              <Link to="/">test@test.com</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
