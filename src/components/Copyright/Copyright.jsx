import { Link } from 'react-router-dom';

import ROUTES from '../../router/routes';

import './copyright.scss';

const Copyright = () => {
  return (
    <p className='copyright'>
      {'Copyright © '}

      <Link color="inherit" href={ROUTES.DASHBOARD}>
        PhysExp
      </Link>{' '}

      {new Date().getFullYear()}
      {'.'}
    </p>
  );
};

export default Copyright;
