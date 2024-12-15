import '@/assets/scss/App.css'
import { Routes, Route } from 'react-router-dom'
import { AppProvider } from 'AppProvider'
import { NotFound } from '@common/components'
import { Main } from '@main/components'
import { FindAccount, Join, Login } from '@auth/components'
import { GameDetail, GameList } from '@games/components'
import { News } from '@news/components'
import { NewSpecial } from '@newSpecial/components'
//마이페이지 구조 구상중

// 레이아웃
import { Header, Footer } from '@common/components'

type RouteType = {
  path: string
  element: JSX.Element
  children?: RouteType[]
}

const App = () => {
  const routes: RouteType[] = [
    { path: '/*', element: <NotFound /> },
    { path: '/', element: <Main /> },
    { path: '/login', element: <Login /> },
    { path: '/join', element: <Join /> },
    { path: '/find-account', element: <FindAccount /> },
    { path: '/game-detail', element: <GameDetail /> },
    { path: '/game-list', element: <GameList /> },
    { path: '/news', element: <News /> },
    { path: '/new-special', element: <NewSpecial /> },
  ]

  const renderRoutes = (routes: RouteType[]) => {
    return routes.map(({ path, element, children }) => (
      <Route key={path} path={path} element={element}>
        {children && renderRoutes(children)}
      </Route>
    ))
  }

  return (
    <AppProvider>
      <Header />
      <Routes>{renderRoutes(routes)}</Routes>
      <Footer />
    </AppProvider>
  )
}

export default App
