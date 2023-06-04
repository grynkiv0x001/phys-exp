import Wrapper from '../../components/Wrapper/Wrapper';
import LessonsCarousel from '../../components/LessonsCarousel/LessonsCarousel';

import { lessons } from '../../mocks/lessons';

import './dashboard.scss';

const Dashboard = () => {
  return (
    <Wrapper>
      <div className='dashboard'>
        <div className='dashboard__content'>
          <div className='dashboard__content-header'>
            <h1 className='dashboard__title'>
              Фізика – ключ до розуміння всесвіту
            </h1>
            <h2 className='dashboard__subtitle'>
              Реєструйся і покращуй свої знання вже зараз!
            </h2>
          </div>
          <LessonsCarousel lessons={lessons}/>
        </div>
        <div className='dashboard__hero'>
          <img src="/src/assets/image.png" alt="hero" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Dashboard;
