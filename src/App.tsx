import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AppProvider } from "AppProvider";
import { Main } from "@main/components/pages";
import { FindAccount, Join, Login } from "@auth/components/pages";
import { GameDetail, GameList } from "@games/components/pages";
import { News } from "@news/components/pages";
import { NewSpecial } from "@newSpecial/components/pages";
//마이페이지 구조 구상중

type RouteType = {
  path: string;
  element: JSX.Element;
  children?: RouteType[];
};

const App = () => {
  const routes: RouteType[] = [
    { path: "/", element: <Main /> },
    { path: "/login", element: <Login /> },
    { path: "/join", element: <Join /> },
    { path: "/find-account", element: <FindAccount /> },
    { path: "/game-detail", element: <GameDetail /> },
    { path: "/game-list", element: <GameList /> },
    { path: "/news", element: <News /> },
    { path: "/new-special", element: <NewSpecial /> },
  ];

  const renderRoutes = (routes: RouteType[]) => {
    return routes.map(({ path, element, children }) => (
      <Route key={path} path={path} element={element}>
        {children && renderRoutes(children)}
      </Route>
    ));
  };

  return (
    <AppProvider>
      <Routes>{renderRoutes(routes)}</Routes>
    </AppProvider>
  );
};

export default App;
