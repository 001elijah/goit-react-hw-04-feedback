import PropTypes from "prop-types";

export const FeedbackOptions = ({ option, onLeaveFeedback }) => {
    return (
        <button type="button" onClick={onLeaveFeedback}>
            {option}
        </button>
    );
};

FeedbackOptions.propTypes = {
    option: PropTypes.string.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};