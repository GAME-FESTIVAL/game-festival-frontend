import { useFormx, useFile } from '@common/hooks'
import type { FieldErrors } from 'react-hook-form'
import { postGameDefaultValues, categories } from '@admin/constants'

export const Admin = () => {
  const { register, watch, handleSubmit, handleArrayField, useArrayField } =
    useFormx<AdminTypes.PostGame.Request>(postGameDefaultValues)

  const { fields, append, remove } = useArrayField('options')

  const childForm = useFormx({
    tag: '',
    option: {
      name: '',
      price: 0,
    },
  })

  const {
    FileUploader: ThumbnailsUploader,
    files: thumbnailFiles,
    removeFile: removeThumbnail,
  } = useFile({
    length: 10,
  })

  const {
    FileUploader: DetailUploader,
    files: detailFiles,
    removeFile: removeDetail,
  } = useFile({
    length: Infinity,
  })

  const onSubmit = (data: AdminTypes.PostGame.Request) => {
    console.log('폼 제출 데이터:', data)
  }

  const onInvalid = (errors: FieldErrors<AdminTypes.PostGame.Request>) => {
    const messages = Object.entries(errors)
      .map(([key, val]) => `${key}: ${val?.type}`)
      .join('\n')
    alert(messages)
    console.log(errors)
  }

  return (
    <main className="admin_create">
      <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
        <dl>
          <dt>게임명</dt>
          <dd>
            <input
              {...register('title', {
                required: true,
              })}
              type="text"
            />{' '}
          </dd>
        </dl>
        <dl>
          <dt>게임 설명</dt>
          <dd>
            <input
              {...register('description', {
                required: true,
              })}
              type="text"
            />
          </dd>
        </dl>
        <dl>
          <dt>가격</dt>
          <dd>
            <input
              {...register('price', { required: true, valueAsNumber: true })}
              type="text"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(
                  /[^0-9]/g,
                  ''
                )
              }}
            />
          </dd>
        </dl>
        <dl>
          <dt>썸네일</dt>
          <dd>
            <label htmlFor="tnumbnailFiles">
              [파일 업로드]
              <ThumbnailsUploader id="tnumbnailFiles" />
            </label>
          </dd>
          <dd className="full images">
            {thumbnailFiles.map((file, idx) => {
              return (
                <div key={`file${idx}`}>
                  <button onClick={() => removeThumbnail(idx)}>&times;</button>
                  <img src={file.url} alt="" className="cover full" />
                </div>
              )
            })}
          </dd>
        </dl>
        <dl>
          <dt>상세 이미지</dt>
          <dd>
            <label htmlFor="detailFiles">
              [파일 업로드]
              <DetailUploader id="detailFiles" />
            </label>
          </dd>
          <dd className="full images">
            {detailFiles.map((file, idx) => {
              return (
                <div key={`file${idx}`}>
                  <button onClick={() => removeDetail(idx)}>&times;</button>
                  <img src={file.url} alt="" className="contain full" />
                </div>
              )
            })}
          </dd>
        </dl>
        <dl>
          <dt>카테고리</dt>
          <dd>
            {categories.map((el, idx) => (
              <label key={idx}>
                <input
                  type="checkbox"
                  {...register('category', {
                    required: true,
                  })}
                  value={el}
                />
                {el}
              </label>
            ))}
          </dd>
        </dl>
        <dl>
          <dt>태그</dt>
          <dd>
            <input type="text" id="tagInput" {...childForm.register('tag')} />
            <button
              type="button"
              className="add"
              onClick={() => {
                handleArrayField('tags', childForm.watch('tag'))
                childForm.resetField('tag')
              }}
            >
              추가
            </button>
          </dd>
          <dd className="full">
            {watch('tags').map((el, idx) => (
              <span key={`tag${idx}`} className="item">
                {el}{' '}
                <button
                  type="button"
                  onClick={() => handleArrayField('tags', el, 'remove')}
                >
                  &times;
                </button>
              </span>
            ))}
          </dd>
        </dl>
        <dl>
          <dt>출시일</dt>
          <dd>
            <input {...register('releaseAt', { required: true })} type="date" />
          </dd>
        </dl>
        <dl>
          <dt>옵션</dt>
          <dd>
            <input
              type="text"
              id="optionName"
              placeholder="옵션명"
              {...childForm.register('option.name')}
            />{' '}
            <input
              type="number"
              id="optionPrice"
              placeholder="가격"
              {...childForm.register('option.price')}
            />
            <button
              type="button"
              className="add"
              onClick={() => {
                append(childForm.getValues('option'))
                childForm.resetField('option')
              }}
            >
              추가
            </button>
          </dd>
          <dd className="full">
            {fields.map((option, index) => (
              <span key={option.id} className="item">
                {option.name} : {option.price}원
                <button type="button" onClick={() => remove(index)}>
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
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(
                  /[^0-9]/g,
                  ''
                )
              }}
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
