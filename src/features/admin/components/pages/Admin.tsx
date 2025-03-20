import { useForm, useFieldArray } from 'react-hook-form'

type GameFormValues = {
  title: string
  description: string
  price: number
  thumbnails: string[]
  category: string[]
  tags: { value: string }[]
  releaseAt: string
  detailImages: string[]
  options: { name: string; price: number }[]
  discountPercentage: number
  discountPeriod: { start: string; end: string }
  detailInfo: {
    title: string
    contentDescriptors: string
    ageRating: number
    ratingNumber: string
    ratingDate: string
    businessName: string
    distributionLicenseNumber: string
    publisher: string
    franchise: string
    developer: string
  }
  recommendedRequirements: {
    os: string
    processor: string
    memory: string
    graphics: string
    network: string
    storage: string
  }
  minimumRequirements: {
    os: string
    processor: string
    memory: string
    graphics: string
    network: string
    storage: string
  }
}

export const Admin = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<GameFormValues>({
    mode: 'all',
    defaultValues: {
      title: '',
      description: '',
      price: 0,
      thumbnails: [],
      category: [],
      tags: [],
      releaseAt: '',
      detailImages: [],
      options: [],
      discountPercentage: 0,
      discountPeriod: { start: '', end: '' },
      detailInfo: {
        contentDescriptors: '폭력성',
        ageRating: 15,
        ratingNumber: 'GC-CC-NP-191115-003',
        ratingDate: '20191115',
        businessName: '주식회사 님블뉴런',
        distributionLicenseNumber: '2013-000005',
        publisher: 'Activision',
        franchise: 'Call of Duty, Black Ops',
        developer: 'Treyarch, Raven Software, Beenox, High Moon Studios',
      },
      recommendedRequirements: {
        os: 'WINDOWS® 10 (64Bit)',
        processor: 'Intel Core i5-6600K , AMD Ryzen 5 1600',
        memory: '16 GB RAM',
        graphics:
          'NVIDIA GeForce GTX 1060 , AMD Radeon RX 580 DirectX: 버전 11',
        network: '초고속 인터넷 연결',
        storage: '20 GB 사용 가능 공간',
      },
      minimumRequirements: {
        os: 'WINDOWS® 10 (64Bit)',
        processor: 'Intel Core i3-3225, AMD FX-4350',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GeForce GTX 660, ATI Radeon HD 7850 DirectX: 버전 11',
        network: '초고속 인터넷 연결',
        storage: '15 GB 사용 가능 공간',
      },
    },
  })

  const {
    fields: tagFields,
    append: addTag,
    remove: removeTag,
  } = useFieldArray({
    control,
    name: 'tags',
  })

  const {
    fields: optionFields,
    append: addOption,
    remove: removeOption,
  } = useFieldArray({
    control,
    name: 'options',
  })

  const categories = [
    '생존',
    '오픈월드',
    '기지건설',
    'RPG',
    'FPS',
    '리듬',
    '액션',
    '어드벤쳐',
    '캐주얼',
    '인디',
    '전략',
    '시뮬레이션',
  ]

  const onSubmit = (data: GameFormValues) => {
    console.log('폼 제출 데이터:', data)
  }

  return (
    <main className="admin_create">
      <form onSubmit={handleSubmit(onSubmit)}>
        <dl>
          <dt>게임명</dt>
          <dd>
            <input
              {...register('title', {
                required: '게임명은 필수 입력값입니다.',
              })}
              type="text"
            />{' '}
            {errors.title && <span>{errors.title.message}</span>}
          </dd>
        </dl>
        <dl>
          <dt>게임 설명</dt>
          <dd>
            <input {...register('description')} type="text" />
          </dd>
        </dl>
        <dl>
          <dt>가격</dt>
          <dd>
            <input
              {...register('price', { valueAsNumber: true })}
              type="number"
            />
          </dd>
        </dl>
        <dl>
          <dt>썸네일</dt>
          <dd>
            <input {...register('thumbnails')} type="file" multiple />
          </dd>
        </dl>
        <dl>
          <dt>카테고리</dt>
          <dd>
            {categories.map((el, idx) => (
              <label key={idx}>
                <input type="checkbox" {...register('category')} value={el} />
                {el}
              </label>
            ))}
          </dd>
        </dl>
        <dl>
          <dt>태그</dt>
          <dd>
            <input type="text" id="tagInput" />
            <button
              type="button"
              className="add"
              onClick={() => {
                const tagValue = (
                  document.getElementById('tagInput') as HTMLInputElement
                )?.value
                if (tagValue) addTag({ value: tagValue })
              }}
            >
              추가
            </button>
          </dd>
          <dd className="full">
            {tagFields.map((tag, index) => (
              <span key={tag.id} className="item">
                {tag.value}{' '}
                <button type="button" onClick={() => removeTag(index)}>
                  &times;
                </button>
              </span>
            ))}
          </dd>
        </dl>
        <dl>
          <dt>출시일</dt>
          <dd>
            <input {...register('releaseAt')} type="date" />
          </dd>
        </dl>
        <dl>
          <dt>옵션</dt>
          <dd>
            <input type="text" id="optionName" placeholder="옵션명" />{' '}
            <input type="number" id="optionPrice" placeholder="가격" />
            <button
              type="button"
              className="add"
              onClick={() => {
                const name = (
                  document.getElementById('optionName') as HTMLInputElement
                )?.value
                const price = parseFloat(
                  (document.getElementById('optionPrice') as HTMLInputElement)
                    ?.value || '0'
                )
                if (name) addOption({ name, price })
              }}
            >
              추가
            </button>
          </dd>
          <dd className="full">
            {optionFields.map((option, index) => (
              <span key={option.id} className="item">
                {option.name} : {option.price}원
                <button type="button" onClick={() => removeOption(index)}>
                  &times;
                </button>
              </span>
            ))}
          </dd>
        </dl>
        <dl>
          <dt>할인율</dt>
          <dd>
            <input
              {...register('discountPercentage', { valueAsNumber: true })}
              type="number"
              max={100}
            />
          </dd>
        </dl>
        <dl>
          <dt>할인 기간</dt>
          <dd>
            <input {...register('discountPeriod.start')} type="date" /> ~{' '}
            <input {...register('discountPeriod.end')} type="date" />
          </dd>
        </dl>
        <dl>
          <dt>기본 정보</dt>
          <dd>
            <details>
              <summary>입력</summary>
              <ul>
                <li>
                  <span>내용정보표지사항</span>{' '}
                  <input {...register('detailInfo.contentDescriptors')} />
                </li>
                <li>
                  <span>이용등급</span>{' '}
                  <input {...register('detailInfo.ageRating')} />
                </li>
                <li>
                  <span>등급분류번호</span>{' '}
                  <input {...register('detailInfo.ratingNumber')} />
                </li>
                <li>
                  <span>등급분류일자</span>{' '}
                  <input {...register('detailInfo.ratingDate')} />
                </li>
                <li>
                  <span>상호</span>{' '}
                  <input {...register('detailInfo.businessName')} />
                </li>
                <li>
                  <span>배급업신고번호</span>{' '}
                  <input
                    {...register('detailInfo.distributionLicenseNumber')}
                  />
                </li>
                <li>
                  <span>개발자</span>{' '}
                  <input {...register('detailInfo.developer')} />
                </li>
                <li>
                  <span>배급사</span>{' '}
                  <input {...register('detailInfo.publisher')} />
                </li>
                <li>
                  <span>프랜차이즈</span>{' '}
                  <input {...register('detailInfo.franchise')} />
                </li>
              </ul>
            </details>
          </dd>
        </dl>
        <dl>
          <dt>권장 사양</dt>
          <dd>
            <details>
              <summary>입력</summary>
              <ul>
                <li>
                  <span>운영체제</span>{' '}
                  <input {...register('recommendedRequirements.os')} />
                </li>
                <li>
                  <span>프로세서</span>{' '}
                  <input {...register('recommendedRequirements.processor')} />
                </li>
                <li>
                  <span>메모리</span>{' '}
                  <input {...register('recommendedRequirements.memory')} />
                </li>
                <li>
                  <span>그래픽</span>{' '}
                  <input {...register('recommendedRequirements.graphics')} />
                </li>
                <li>
                  <span>네트워크</span>{' '}
                  <input {...register('recommendedRequirements.network')} />
                </li>
                <li>
                  <span>저장공간</span>{' '}
                  <input {...register('recommendedRequirements.storage')} />
                </li>
              </ul>
            </details>
          </dd>
        </dl>
        <dl>
          <dt>최소 사양</dt>
          <dd>
            <details>
              <summary>입력</summary>
              <ul>
                <li>
                  <span>운영체제</span>{' '}
                  <input {...register('minimumRequirements.os')} />
                </li>
                <li>
                  <span>프로세서</span>{' '}
                  <input {...register('minimumRequirements.processor')} />
                </li>
                <li>
                  <span>메모리</span>{' '}
                  <input {...register('minimumRequirements.memory')} />
                </li>
                <li>
                  <span>그래픽</span>{' '}
                  <input {...register('minimumRequirements.graphics')} />
                </li>
                <li>
                  <span>네트워크</span>{' '}
                  <input {...register('minimumRequirements.network')} />
                </li>
                <li>
                  <span>저장공간</span>{' '}
                  <input {...register('minimumRequirements.storage')} />
                </li>
              </ul>
            </details>
          </dd>
        </dl>
        <button type="submit">등록</button>
      </form>
    </main>
  )
}
