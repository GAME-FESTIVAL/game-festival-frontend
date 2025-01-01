import '@/assets/scss/App.css'

import { Routes, Route, useLocation } from 'react-router-dom'
import { Header, Footer, StickyMenu } from '@common/components'
import { AppProvider } from 'AppProvider'
import { NotFound } from '@common/components'
import { FindAccount, Join, Login } from '@auth/components'
import { Main } from '@main/components'
import { GameDetail, GameList } from '@games/components'
import { NewSpecial } from '@newSpecial/components'

type RouteType = {
  path: string
  element: JSX.Element
  children?: RouteType[]
}

const App = () => {
  const location = useLocation()

  const excludedPaths = ['/', '/login', '/join', '/*'] // 스티키 메뉴 제외할 경로
  const shouldRenderStickyMenu = !excludedPaths.includes(location.pathname) // 제외 경로가 아닐 때만 렌더링

  const routes: RouteType[] = [
    { path: '/*', element: <NotFound /> },
    { path: '/', element: <Main /> },
    { path: '/login', element: <Login /> },
    { path: '/join', element: <Join /> },
    { path: '/find-account', element: <FindAccount /> },
    { path: '/game-detail', element: <GameDetail /> },
    { path: '/game-list', element: <GameList /> },
    { path: '/new-special', element: <NewSpecial /> },
  ]

  const renderRoutes = (routes: RouteType[], parentPath = '') => {
    return routes.map(({ path, element, children }) => {
      const fullPath = parentPath + path // 부모-자식 경로 조합
      return (
        <Route key={fullPath} path={path} element={element}>
          {children && renderRoutes(children, fullPath)}
        </Route>
      )
    })
  }

  return (
    <AppProvider>
      <Header />
      {shouldRenderStickyMenu ? (
        <div className="major_container">
          <div className="inner">
            <StickyMenu />
            <Routes>{renderRoutes(routes)}</Routes>
          </div>
        </div>
      ) : (
        <Routes>{renderRoutes(routes)}</Routes>
      )}
      <Footer />
    </AppProvider>
  )
}

export default App
