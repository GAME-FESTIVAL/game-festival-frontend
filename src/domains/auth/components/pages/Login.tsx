import { Link } from 'react-router-dom'
import { useDevice } from '@common/hooks'

//--------------- 이미지 ---------------//
import characterPC from '@/assets/imgs/member/img_login_character_pc.png'
import characterMO from '@/assets/imgs/member/img_login_character_mo.png'
import IDInputIconPC from '@/assets/imgs/member/img_login_IDInput_icon_pc.png'
import IDInputIconMO from '@/assets/imgs/member/img_login_IDInput_icon_mo.png'
import PWInputIconPC from '@/assets/imgs/member/img_login_PWInput_icon_pc.png'
import PWInputIconMO from '@/assets/imgs/member/img_login_PWInput_icon_mo.png'

export const Login = () => {
  const { isDesktop } = useDevice()

  return (
    <main className="main login member sub_container">
      <div className="inner">
        <div className="tit">
          <img
            src={isDesktop ? characterPC : characterMO}
            alt="캐릭터"
            key={isDesktop ? 'desktop' : 'mobile'}
          />
          <p>
            로그인 후<br />
            이용이 가능합니다.
          </p>
        </div>
        <form action="">
          <fieldset>
            <div className="form_content">
              {/* 아이디, 비밀번호 */}
              <div className="input_box">
                {/* 아이디 */}
                <div className="input_cell lump">
                  <img
                    src={isDesktop ? IDInputIconPC : IDInputIconMO}
                    alt="아이콘"
                    key={isDesktop ? 'desktop' : 'mobile'}
                  />
                  <input
                    type="text"
                    id="loginID"
                    name="loginID"
                    placeholder="아이디 또는 이메일 주소를 입력해주세요."
                  />
                </div>
                {/* 비밀번호 */}
                <div className="input_cell zero">
                  <img
                    src={isDesktop ? PWInputIconPC : PWInputIconMO}
                    alt="아이콘"
                    key={isDesktop ? 'desktop' : 'mobile'}
                  />
                  <input
                    type="password"
                    id="loginPW"
                    name="loginPW"
                    placeholder="비밀번호를 입력해주세요."
                  />
                </div>
              </div>
              {/* 자동 로그인 */}
              <div className="chk_box">
                <input type="checkbox" id="check1" name="check1" />
                <label htmlFor="check1">
                  <span className="square_check"></span>
                  자동 로그인
                </label>
              </div>
              {/* 로그인 버튼 */}
              <div className="input_box">
                <button type="button" className="submit_btn">
                  Login
                </button>
              </div>
            </div>
          </fieldset>
        </form>

        <div className="form_util">
          <ul>
            <li>
              <Link to="/join">회원가입</Link>
            </li>
            <li>
              <Link to="/find-account">아이디/비밀번호 찾기</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
