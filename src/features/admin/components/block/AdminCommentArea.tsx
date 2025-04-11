import type { FieldErrors } from 'react-hook-form'
import { useFormx, useQueryUtils } from '@common/hooks'
import { useGetUsers } from '@common/services'
import {
  useGetComments,
  usePostDummyComment,
  useDeleteComment,
} from '@games/services'
import { AdminRegistering } from '@admin/components'
import { format } from 'date-fns'
import { useState } from 'react'

export const AdminCommentArea = ({ id }: { id: string }) => {
  const { data } = useGetComments(`gameId=${id}&size=0`)
  const { mutateAsync } = useDeleteComment()
  const [isFetching, setIsFetching] = useState(false)
  const {
    queryKeys: { games },
    invalidateQueries,
  } = useQueryUtils()

  const deleteComment = async (commentId: string) => {
    if (!confirm('삭제하시겠습니까?')) return
    setIsFetching(true)
    await mutateAsync(commentId)
    alert('삭제되었습니다.')
    setIsFetching(false)
    invalidateQueries([...games.getGameDetail, id])
  }

  return (
    <section>
      {isFetching && <AdminRegistering text="삭제" />}
      <CommentInput id={id} />
      {data?.comments?.map((comment, idx) => (
        <figure key={`comment${idx}`} className="comment_item">
          <dl>
            <dt>작성일 :</dt>
            <dd>{format(comment.createdAt, 'yyyy-MM-dd')}</dd>
          </dl>
          <dl>
            <dt>반응 :</dt>
            <dd>
              {comment.isRecommended ? '긍정적' : '부정적'} ({comment.rating}점)
            </dd>
          </dl>
          <dl>
            <dt>플레이타임 :</dt>
            <dd>{comment.playTime}시간</dd>
          </dl>
          <dl>
            <dt>작성자 :</dt>
            <dd>{comment.writer.nickname}</dd>
          </dl>
          <dl className="content">
            <dd>{comment.content}</dd>
          </dl>
          <button onClick={() => deleteComment(comment._id)}>삭제</button>
        </figure>
      ))}
    </section>
  )
}

const CommentInput = ({ id }: { id: string }) => {
  const { data } = useGetUsers()
  const { mutateAsync } = usePostDummyComment()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { isSubmitting },
  } = useFormx({
    writer: '',
    gameId: id,
    isRecommended: true,
    rating: 5,
    content: '',
    playTime: 0,
  })

  const onSubmit = async (data: GamesTypes.PostComment.Request) => {
    console.log(data)
    await mutateAsync(data)
    alert('등록되었습니다.')
    reset()
  }

  const onInvalid = (errors: FieldErrors<GamesTypes.PostComment.Request>) => {
    if (errors.writer) alert(errors.writer?.message)
  }

  return (
    <section className="comment_input">
      {isSubmitting && <AdminRegistering />}
      <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
        <div className="etc_fields">
          <div>
            <label>
              평점{' '}
              <input
                type="range"
                min="0"
                max="5"
                step="0.5"
                {...register('rating', {
                  valueAsNumber: true,
                  onChange: (e) => {
                    if (e.target.value > 2.5) setValue('isRecommended', true)
                    else setValue('isRecommended', false)
                  },
                })}
              />{' '}
              {watch('rating')}점 ({watch('rating') > 2.5 ? '긍정적' : '부정적'}
              )
            </label>
            {' | '}
            <label htmlFor="">
              플레이타임{' '}
              <select
                {...register('playTime', {
                  valueAsNumber: true,
                })}
              >
                <option value={0}>지정 안 함</option>
                <option value={1}>1시간 이상</option>
                <option value={10}>10시간 이상</option>
                <option value={100}>100시간 이상</option>
              </select>
            </label>
            {' | '}
            <label htmlFor="">
              작성자{' '}
              <select
                {...register('writer', {
                  required: '작성자를 선택하세요.',
                })}
              >
                <option value="newUser">새 계정 추가</option>
                {data?.map((user, idx) => (
                  <option key={`user${idx}`} value={user?._id}>
                    {user?.nickname}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <button type="submit">등록</button>
        </div>
        <div>
          <textarea {...register('content')}></textarea>
        </div>
      </form>
    </section>
  )
}
