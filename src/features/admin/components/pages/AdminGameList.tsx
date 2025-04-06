import { Link, useNavigate } from 'react-router-dom'
import { useGetGames } from '@games/services'
import { useQueryString } from '@common/hooks'
import { Pagination } from '@common/components'
import { format } from 'date-fns'

export const AdminGameList = () => {
  const navigate = useNavigate()
  const { queryString } = useQueryString({ page: 1 })
  const { data } = useGetGames(queryString)

  return (
    <main className="admin_list">
      <div className="btn_wrap">
        <Link to="create">게임추가</Link>
      </div>
      <div className="table_wrap">
        <table>
          <colgroup>
            <col width={'10%'} />
            <col width={'45%'} />
            <col width={'25%'} />
            <col width={'10%'} />
            <col width={'10%'} />
          </colgroup>
          <thead>
            <tr>
              <th>썸네일</th>
              <th>게임명</th>
              <th>카테고리</th>
              <th>위시리스트 수</th>
              <th>등록일</th>
            </tr>
          </thead>
          <tbody>
            {data?.games?.map((game, idx) => (
              <tr
                key={`gameItem${idx}`}
                onClick={() => navigate(`/admin/game/${game._id}`)}
              >
                <td>
                  <div className="thumbnail_wrap">
                    <img src={game.thumbnail[0].location} alt="" />
                  </div>
                </td>
                <td>{game.title}</td>
                <td>{game.category.join()}</td>
                <td>{game.wishlistCount}</td>
                <td>{format(game.createdAt, 'yyyy.MM.dd')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination total={data?.totalCount || 0} />
    </main>
  )
}
