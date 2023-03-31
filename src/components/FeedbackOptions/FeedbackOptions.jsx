import PropTypes from "prop-types";
import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ option, onLeaveFeedback }) => {
    return (
        <button type="button" onClick={onLeaveFeedback} className={s.Button}>
            {option}
        </button>
    );
};

FeedbackOptions.propTypes = {
    option: PropTypes.string.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};