import { useGetGames } from '@games/services'
import { useQueryString } from '@common/hooks'
import { Pagination } from '@common/components'
import { Link } from 'react-router-dom'

export const AdminGameList = () => {
  const { queryString } = useQueryString({ page: 1 })

  console.log(queryString)

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
            {data?.list?.map((game, idx) => (
              <tr key={`gameItem${idx}`}>
                <td>
                  <img src={game.thumbnails[0].location} alt="" />
                </td>
                <td>{game.title}</td>
                <td>{game.category}</td>
                <td>{game.createdAt}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td>테스트게임1</td>
              <td>액션, RPG</td>
              <td>3000</td>
              <td>2025.03.25</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Pagination total={data?.totalCount || 0} />
    </main>
  )
}
