import { useFormx, useFile } from '@common/hooks'
import type { FieldErrors } from 'react-hook-form'
import { postGameDefaultValues, categories } from '@admin/constants'
import { usePostGame, usePatchGame, useGetGameDetail, useDeleteGame } from '@games/services'
import { usePostFiles } from '@common/services'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'

export const AdminGameUpdate = () => {
  const { id } = useParams()
  const { data: gameDetail } = useGetGameDetail(id || "")
  const { mutate: postGame } = usePostGame()
  const { mutate: patchGame } = usePatchGame()
  const { mutate: deleteGame } = useDeleteGame()
  const { mutateAsync: postFiles } = usePostFiles()
  const { register, watch, reset, resetField, handleSubmit, handleArrayField, useArrayField, formState: { errors } } =
    useFormx<GamesTypes.PatchGame.Request>(postGameDefaultValues)

  const { fields, append, remove } = useArrayField('options')

  const childForm = useFormx({
    tag: '',
    option: {
      name: '',
      price: 0,
    },
  })

  console.log(errors)
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

  const actionType = gameDetail ? '수정' : '등록'

  const onSubmit = async (body: GamesTypes.PatchGame.Request) => {
    console.log('폼 제출 데이터:', body)
    try {
      if (thumbnailFiles[0]) body.thumbnails = await postFiles(thumbnailFiles)
      if (detailFiles[0]) body.detailImages = await postFiles(detailFiles)
    } catch {
      return alert('파일 업로드에 실패했습니다.')
    }
    const onSuccess = () => alert(`게임이 ${actionType}되었습니다.`);
    if (id) patchGame({ id, body }, { onSuccess })
    else postGame(body, { onSuccess })
  }

  const onInvalid = (errors: FieldErrors<GamesTypes.PatchGame.Request>) => {
    const messages = Object.entries(errors)
      .map(([key, val]) => `${key}: ${val?.type}`)
      .join('\n')
    alert(messages)
    console.log(errors)
  }

  const onDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault
    if (!id) return
    if (window.confirm('정말 삭제하시겠습니까?')) {
      deleteGame(id, {
        onSuccess: () => alert('게임이 삭제되었습니다.')
      })
    }
  }

  useEffect(() => {
    if (gameDetail) reset(gameDetail)
  }, [gameDetail])

  return (
    <main className="admin_update">
      <div className='btn_wrap'>
        <Link to="/admin/game">목록으로</Link>
      </div>
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
              {...register('discountPercentage', {
                valueAsNumber: true, onChange: (e,) => {
                  if (!watch('discountPercentage')) {
                    resetField('discountPeriod')
                  }
                }
              })}
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
            <input {...register('discountPeriod.start')} type="date" disabled={!watch('discountPercentage')} max={watch('discountPeriod.end')} /> ~{' '}
            <input {...register('discountPeriod.end')} type="date" disabled={!watch('discountPercentage')} min={watch('discountPeriod.start')} />
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
        <section className='btn_wrap'>
          <button type="submit">{actionType}</button>
          {
            id && <button onClick={onDelete}>삭제</button>
          }
          <button onClick={(e) => {
            e.preventDefault()
            if (confirm('초기화하시겠습니까?')) reset()
          }}>초기화</button>

        </section>
      </form>
    </main>
  )
}
