import { lessons } from '../../mocks/lessons';

import Wrapper from '../../components/Wrapper/Wrapper';
import LessonCard from './components/LessonCard/LessonCard';

import UserCard from './components/UserCard/UserCard';

import './lessons.scss';

const Lessons = () => {
  return (
    <Wrapper>
      <div className='lessons'>
        <div className="lessons__grid">
          {lessons.map((lesson, index) => (
            <LessonCard key={lesson.id} lesson={{...lesson, index: index + 1 }}/>
          ))}
        </div>
        <div className="lessons__profile">
          <UserCard/>
        </div>
      </div>
    </Wrapper>
  );
};

export default Lessons;
