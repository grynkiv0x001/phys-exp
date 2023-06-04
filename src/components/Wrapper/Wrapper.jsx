import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './wrapper.scss';

const Wrapper = (props) => {
  const { children } = props;

  return (
    <div className="wrapper">
      <Header/>
        <main className='wrapper__content'>
          {children}
        </main>
      <Footer/>
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default Wrapper;
