import PropTypes from 'prop-types';

import './lessonCard.scss';

const LessonCard = (props) => {
  const { lesson } = props;
  const { index: lessonPosition, title } = lesson; 

  return (
    <div className='lesson-card'>
      <div className='lesson-card__image'>
      </div>
      <p className="lesson-card__title">
        Урок {lessonPosition} - {title}
      </p>
    </div>
  );
};

LessonCard.propTypes = {
  lesson: PropTypes.shape({
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

LessonCard.defaultProps = {
  lesson: {},
};

export default LessonCard;
