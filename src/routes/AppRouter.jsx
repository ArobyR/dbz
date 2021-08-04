import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "../components/Header";
import Loading from "../components/Loading";
//import CharaterScreen from "../pages/CharaterScreen";
// import MenScreen from "../pages/MenScreen";
// import SearchScreen from "../pages/SearchScreen";
// import WomenScreen from "../pages/WomenScreen";

// const Header = lazy(() => import("../components/Header"))
const CharaterScreen = lazy(() => import("../pages/CharaterScreen"));
const MenScreen = lazy(() => import("../pages/MenScreen"));
const SearchScreen = lazy(() => import("../pages/SearchScreen"));
const WomenScreen = lazy(() => import("../pages/WomenScreen"));

const AppRouter = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading/>}>
        <Switch>
          <Route exact path="/men" component={MenScreen} />
          <Route exact path="/women" component={WomenScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Route exact path="/character/:id" component={CharaterScreen} />
          <Redirect to="/men" />
        </Switch>
      </Suspense>
    </>
  );
};

export default AppRouter;
