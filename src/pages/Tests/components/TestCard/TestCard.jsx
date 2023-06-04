import PropTypes from 'prop-types';

import './testCard.scss';

const TestCard = (props) => {
  const { test } = props;
  const { index: testPosition, title } = test; 

  return (
    <div className='test-card'>
      <div className='test-card__image'>
      </div>
      <p className="test-card__title">
        Тест {testPosition} - {title}
      </p>
    </div>
  );
};

TestCard.propTypes = {
  test: PropTypes.shape({
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

TestCard.defaultProps = {
  test: {},
};

export default TestCard;
