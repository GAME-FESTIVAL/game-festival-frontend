import { Route, Routes } from 'react-router-dom'
import { Admin, AdminGameList, AdminGameUpdate } from '@admin/components'

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />}>
        <Route path="game" element={<AdminGameList />} />
        <Route path="game/create" element={<AdminGameUpdate />} />
        <Route path="game/:id" element={<AdminGameUpdate />} />
      </Route>
    </Routes>
  )
}
