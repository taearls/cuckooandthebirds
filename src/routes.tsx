import { Route, Routes } from "react-router";

import routes from "./util/constants/data/navigation/navigationData";

export default (
  <Routes>
    {routes.map((route) => (
      <Route key={route.name} path={route.href} element={route.component} />
    ))}
  </Routes>
);
