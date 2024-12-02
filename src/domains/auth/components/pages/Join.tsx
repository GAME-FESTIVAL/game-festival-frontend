import { useFormHandler } from '@common/hooks'

export const Join = () => {
  const { form, attributes, isSubmitting } = useFormHandler({
    gender: 'male',
  })

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
                    type: 'array',
                  })}
                />
              </label>
            ))}
          </dd>
        </dl>

        <button>{isSubmitting() ? '제출가능' : '제출불가'}</button>
      </fieldset>
    </main>
  )
}
