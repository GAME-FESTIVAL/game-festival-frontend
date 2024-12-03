import { useFormHandler } from '@common/hooks'
import { defaultValidRules } from '@common/constants'
export const Join = () => {
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
    <main>
      <fieldset>
        <legend>회원가입</legend>
        <dl>
          <dt>이름</dt>
          <dd>
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
          </dd>
        </dl>

        <dl>
          <dt>비밀번호</dt>
          <dd>
            <input
              type="text"
              {...attributes('password', {
                required: true,
                rule: 'password',
                reset: 'name',
              })}
            />
          </dd>
        </dl>

        <dl>
          <dt>비밀번호 확인</dt>
          <dd>
            <input
              type="text"
              {...attributes('password_confirm', {
                required: true,
                match: 'password',
                errorStyle: {
                  backgroundColor: 'red',
                },
              })}
              placeholder="비밀번호를 다시 입력해주세요."
            />
          </dd>
        </dl>

        <dl>
          <dt>성별</dt>
          <dd>
            {[
              { name: '남', value: 'male' },
              { name: '여', value: 'female' },
            ].map((el) => (
              <label key={el.value}>
                {el.name}
                <input
                  type="radio"
                  checked={form['gender'] === el.value}
                  {...attributes('gender', {
                    required: true,
                    value: el.value,
                  })}
                />
              </label>
            ))}
          </dd>
        </dl>

        <dl>
          <dt>관심분야</dt>
          <dd>
            {[
              { name: 'FPS', value: 'fps' },
              { name: 'RPG', value: 'rpg' },
              { name: 'AOS', value: 'aos' },
            ].map((el) => (
              <label key={el.value}>
                {el.name}
                <input
                  type="checkbox"
                  {...attributes('interest', {
                    value: el.value,
                    type: 'checkbox',
                  })}
                />
              </label>
            ))}
          </dd>
        </dl>

        <button onClick={onSubmit}>
          {isSubmitting() ? '제출가능' : '제출불가'}
        </button>
      </fieldset>
    </main>
  )
}
