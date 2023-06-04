import { tests } from '../../mocks/tests';

import Wrapper from '../../components/Wrapper/Wrapper';
import TestCard from './components/TestCard/TestCard';

import UserCard from '../Lessons/components/UserCard/UserCard';

import './tests.scss';

const Tests = () => {
  return (
    <Wrapper>
      <div className='tests'>
        <div className="tests__grid">
          {tests.map((test, index) => (
            <TestCard key={test.id} test={{...test, index: index + 1 }}/>
          ))}
        </div>
        <div className="tests__profile">
          <UserCard/>
        </div>
      </div>
    </Wrapper>
  );
};

export default Tests;
