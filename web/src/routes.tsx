import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";
import Orphanage from "./pages/Orphanage";
import CreateOrphanage from "./pages/CreateOrphanage";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing}></Route>
      <Route path="/app" component={OrphanagesMap}></Route>

      <Route path="/orphanages/create" component={Orphanage}></Route>
      <Route path="/orphanages/:id" component={CreateOrphanage}></Route>
    </BrowserRouter>
  );
}

export default Routes;
