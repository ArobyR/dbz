import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import CharaterScreen from "../pages/CharaterScreen";
import MenScreen from "../pages/MenScreen";
import SearchScreen from "../pages/SearchScreen";
import WomenScreen from "../pages/WomenScreen";

const AppRouter = () => {
  return (
    <>
        <Header />
      <Switch>
        <Route exact path="/men" component={MenScreen} />
        <Route exact path="/women" component={WomenScreen} />
        <Route exact path="/search" component={SearchScreen} />
        <Route exact path="/character/:id" component={CharaterScreen} />
        {/* <Redirect to="/men" /> */}
      </Switch>
    </>
  );
};

export default AppRouter;
