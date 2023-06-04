import PropTypes from 'prop-types';

import './lessonsCarousel.scss';

const LessonsCarousel = (props) => {
  const { lessons } = props;

  return (
    <div className='lessons-carousel'>
      <h3 className='lessons-carousel__title'>
        Каталог навчального матеріалу
      </h3>
      <button className='lessons-carousel__left-arrow'>
        <img src="/src/assets/Arrow.svg" alt="Left arrow" />
      </button>
      <ul className='lessons-carousel__list'>
        {lessons.map((lesson) => (
          <li className='lessons-carousel__item' key={lesson.id}>
            {lesson.title}
          </li>
        ))}
      </ul>
      <button className='lessons-carousel__right-arrow'>
        <img src="/src/assets/Arrow.svg" alt="Right arrow" />
      </button>
    </div>
  );
};

LessonsCarousel.propTypes = {
  lessons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

LessonsCarousel.defaultProps = {
  lessons: [],
};

export default LessonsCarousel;
