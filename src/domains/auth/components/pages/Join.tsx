import { useFormHandler } from '@common/hooks'
import { defaultValidRules } from '@common/constants'
import { useDevice } from '@common/hooks'

//--------------- 이미지 ---------------//
import characterPC from '@/assets/imgs/member/img_login_character_pc.png'
import characterMO from '@/assets/imgs/member/img_login_character_mo.png'
import NameInputIconPC from '@/assets/imgs/member/img_join_NameInput_icon_pc.png'
import NameInputIconMO from '@/assets/imgs/member/img_join_NameInput_icon_mo.png'
import PWInputIconPC from '@/assets/imgs/member/img_join_PWInput_icon_pc.png'
import PWInputIconMO from '@/assets/imgs/member/img_join_PWInput_icon_mo.png'
import GenderInputIconPC from '@/assets/imgs/member/img_join_GenderInput_icon_pc.png'
import GenderInputIconMO from '@/assets/imgs/member/img_join_GenderInput_icon_mo.png'
import InterestInputIconPC from '@/assets/imgs/member/img_join_InterestInput_icon_pc.png'
import InterestInputIconMO from '@/assets/imgs/member/img_join_InterestInput_icon_mo.png'

export const Join = () => {
  const { isDesktop } = useDevice()

  const { form, attributes, isSubmitting, inputRefs } = useFormHandler(
    { gender: 'male' },
    defaultValidRules
  )

  const onSubmit = () => {
    isSubmitting((_, requiredItems) => {
      for (const key of requiredItems) {
        const value = Array.isArray(form[key]) ? form[key][0] : form[key]
        if (!value) return inputRefs.current[key]?.focus()
      }
    })
  }

  return (
    <main id="join" className="inner">
      <div className="member">
        <div className="tit">
          <img
            src={isDesktop ? characterPC : characterMO}
            alt="캐릭터"
            key={isDesktop ? 'desktop' : 'mobile'}
          />
          <p>
            회원가입을 위하여
            <br />
            개인정보를 입력해주세요.
          </p>
        </div>
        <form action="">
          <fieldset>
            <div className="form_content">
              <span>
                <span className="asterisk">*</span> 표시 필수사항
              </span>
              <div className="input_box">
                {/* ## 이름 */}
                <div className="input_cell">
                  <span className="input_tit">
                    <img
                      src={isDesktop ? NameInputIconPC : NameInputIconMO}
                      alt="아이콘"
                      key={isDesktop ? 'desktop' : 'mobile'}
                    />
                    이름<span className="asterisk">*</span>
                  </span>
                  <input
                    type="text"
                    {...attributes('name', {
                      required: true,
                      rule: 'name',
                      errorStyle: {
                        backgroundColor: 'red',
                      },
                    })}
                  />
                </div>
                {/* ## 비밀번호 */}
                <div className="input_cell">
                  <span className="input_tit">
                    <img
                      src={isDesktop ? PWInputIconPC : PWInputIconMO}
                      alt="아이콘"
                      key={isDesktop ? 'desktop' : 'mobile'}
                    />
                    비밀번호<span className="asterisk">*</span>
                  </span>
                  <input
                    type="password"
                    {...attributes('password', {
                      required: true,
                      rule: 'password',
                      reset: 'name',
                    })}
                  />
                </div>
                {/* ## 비밀번호 확인 */}
                <div className="input_cell">
                  <span className="input_tit">
                    <img
                      src={isDesktop ? PWInputIconPC : PWInputIconMO}
                      alt="아이콘"
                      key={isDesktop ? 'desktop' : 'mobile'}
                    />
                    비밀번호 확인<span className="asterisk">*</span>
                  </span>
                  <input
                    type="password"
                    {...attributes('password_confirm', {
                      required: true,
                      match: 'password',
                      errorStyle: {
                        backgroundColor: 'red',
                      },
                    })}
                    placeholder="비밀번호를 다시 입력해주세요."
                  />
                </div>
              </div>
              {/* ## 성별 */}
              <div className="chk_box">
                <span className="input_tit">
                  <img
                    src={isDesktop ? GenderInputIconPC : GenderInputIconMO}
                    alt="아이콘"
                    key={isDesktop ? 'desktop' : 'mobile'}
                  />
                  성별<span className="asterisk">*</span>
                </span>
                {[
                  { name: '남성', value: 'male' },
                  { name: '여성', value: 'female' },
                ].map((el) => (
                  <div key={el.value}>
                    <input
                      type="radio"
                      id={`${el.value}`}
                      checked={form['gender'] === el.value}
                      {...attributes('gender', {
                        required: true,
                        value: el.value,
                      })}
                    />
                    <label htmlFor={`${el.value}`}>
                      <span className="circle_check"></span>
                      {el.name}
                    </label>
                  </div>
                ))}
              </div>
              {/* ## 관심분야 */}
              <div className="chk_box">
                <span className="input_tit">
                  <img
                    src={isDesktop ? InterestInputIconPC : InterestInputIconMO}
                    alt="아이콘"
                    key={isDesktop ? 'desktop' : 'mobile'}
                  />
                  관심분야<span className="asterisk">*</span>
                </span>
                {[
                  { name: 'FPS', value: 'fps' },
                  { name: 'RPG', value: 'rpg' },
                  { name: 'AOS', value: 'aos' },
                ].map((el) => (
                  <div key={el.value}>
                    <input
                      type="checkbox"
                      id={`${el.value}`}
                      {...attributes('interest', {
                        value: el.value,
                        type: 'checkbox',
                      })}
                    />
                    <label htmlFor={`${el.value}`} key={el.value}>
                      <span className="square_check"></span>
                      {el.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* ## 가입 버튼 */}
            <div className="input_box">
              <button
                onClick={onSubmit}
                disabled={!isSubmitting()}
                className={`submit_btn`}
              >
                Join
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </main>
  )
}
