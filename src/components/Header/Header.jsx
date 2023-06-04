import { NavLink } from 'react-router-dom';

import Login from '../../pages/Login/Login';
import ROUTES from '../../router/routes';

import './header.scss';

const Header = () => {
  return (
    <header className='header'>
      <nav className='header__nav nav'>
        <ul className="nav-list">
          <div className='header__logo'>
            <img src='/src/assets/Logo.svg' alt='logo'/>
          </div>
          <li className="nav-list__item">
            <NavLink to={ROUTES.DASHBOARD}>Головна</NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink to={ROUTES.LESSONS}>Уроки</NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink to={ROUTES.TESTS}>Тести</NavLink>
          </li>
        </ul>
      </nav>
      <div className='header__user'>
        <Login/>
      </div>
    </header>
  );
}

export default Header;
