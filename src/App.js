import React from 'react'
import { routes } from './helpers/routes';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { connect } from 'react-redux';

import { simpleAction } from './store/actions/simpleAction';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(route => (
          <Route key={route} exact={route.exact} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

// export default App;
export default connect()(App);
