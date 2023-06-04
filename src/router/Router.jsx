import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';

// Pages
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Dashboard from '../pages/Dashboard/Dashboard';
import Lessons from '../pages/Lessons/Lessons';
import Tests from '../pages/Tests/Tests';

import ROUTES from './routes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTES.LOGIN} element={<Login/>}/>
      <Route path={ROUTES.REGISTER} element={<Register/>}/>
      <Route path={ROUTES.DASHBOARD} element={<Dashboard/>}/>
      <Route path={ROUTES.LESSONS} element={<Lessons/>}/>
      <Route path={ROUTES.TESTS} element={<Tests/>}/>
      <Route path={ROUTES.NOT_FOUND} element={<div>Not Found</div>}/>
    </>
  )
);

export default router;
