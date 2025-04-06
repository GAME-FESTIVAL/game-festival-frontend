import { Route, Routes } from 'react-router-dom'
import { AdminContainer, AdminGameList, AdminGameUpdate, AdminGameDummyUpdate } from '@admin/components'

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminContainer />}>
        <Route path="game" element={<AdminGameList />} />
        <Route path="game/create" element={<AdminGameUpdate />} />
        <Route path="game/create/dummy" element={<AdminGameDummyUpdate />} />
        <Route path="game/:id" element={<AdminGameUpdate />} />
      </Route>
    </Routes>
  )
}
