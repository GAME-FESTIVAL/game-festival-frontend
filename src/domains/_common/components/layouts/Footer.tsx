import { Link } from 'react-router-dom'
import { LineDeco } from '@common/components'
import { lineItemsList } from '@common/constants'
import { useDevice } from '@common/hooks'

//--------------- 이미지 ---------------//
import logoPC from '@/assets/imgs/common/layout/img_footer_logo_pc.png'
import logoMO from '@/assets/imgs/common/layout/img_footer_logo_mo.png'
import iconPC from '@/assets/imgs/common/layout/img_footer_icon_pc.png'
import iconMO from '@/assets/imgs/common/layout/img_footer_icon_mo.png'

export const Footer = () => {
  const { isDesktop } = useDevice()

  const footerLinkMove = [
    { path: '/test1', title: '현재 인기 게임' },
    { path: '/test2', title: '특가 상품' },
    { path: '/test3', title: 'What your favorite game?' },
    { path: '/test4', title: '인기 신제품' },
  ]

  return (
    <footer className="footer comm_container">
      <div className="inner">
        <div className="top_column">
          <p>GAME</p>
          <img
            src={isDesktop ? logoPC : logoMO}
            alt="아이콘"
            key={isDesktop ? 'desktop' : 'mobile'}
          />
        </div>
        <div className="bott_column">
          {/* 좌측 꾸밈 컨텐츠 */}
          <div className="etc">
            <LineDeco lineType="first" items={lineItemsList.first} />
            <LineDeco lineType="second" items={lineItemsList.second} />
            <LineDeco lineType="third" items={lineItemsList.third} />
          </div>
          {/* 우측 링크, 이메일 컨텐츠 */}
          <ul className="main_section_link">
            <li className="link">
              {footerLinkMove.map((el, index) => (
                <Link key={`${el.path}-${index}`} to={el.path}>
                  {el.title}
                </Link>
              ))}
            </li>
            <li className="email">
              <img
                src={isDesktop ? iconPC : iconMO}
                alt="아이콘"
                key={isDesktop ? 'desktop' : 'mobile'}
              />
              <Link to="/">test@test.com</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
