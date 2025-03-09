import '@/assets/scss/App.scss'
import { Routes, Route } from 'react-router-dom'
import { Header, Footer, PageContainer, StickyMenu } from '@common/components'
import { NotFound } from '@common/components'
import { FindAccount, Join, Login } from '@auth/components'
import { Main } from '@main/components'
import { GameDetail, GameList } from '@games/components'
import { NewSpecial } from '@newSpecial/components'
import { Fragment } from 'react/jsx-runtime'

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
    <Fragment>
      <Header />
      <PageContainer>
        <StickyMenu />
        <Routes>{renderRoutes(routes)}</Routes>
      </PageContainer>
      <Footer />
    </Fragment>
  )
}

export default App
