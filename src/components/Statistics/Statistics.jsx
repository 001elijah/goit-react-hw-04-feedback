import PropTypes from "prop-types";


export const Statistics = (props) => {
    return (Object.entries(props).map(([label, data]) => {
        return (
                <li>
                    <span>
                          {label === 'good' ? `Good: ${data}` :
                           label === 'neutral' ? `Neutral: ${data}` :
                           label === 'bad' ? `Bad: ${data}` :
                           label === 'total' ? `Total: ${data}` :
                           label === 'positiveFeedback' ? `Positive feedback: ${data}%` : 'undefined data'}
                    </span>
                </li>
        );
    }));
};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positiveFeedback: PropTypes.number
};