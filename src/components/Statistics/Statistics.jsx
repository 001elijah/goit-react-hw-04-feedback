import PropTypes from "prop-types";
import shortid from "shortid";

export const Statistics = (props) => {
    return Object.entries(props).map(e => {
        const label = e[0];
        const number = e[1];
        return (
            <>
                <li key={shortid.generate()}>
                    <span>
                          {label === 'good' ? 'Good: ' :
                           label === 'neutral' ? 'Neutral: ' :
                           label === 'bad' ? 'Bad: ' :
                           label === 'total' ? 'Total: ' :
                           label === 'positiveFeedback' ? 'Positive feedback: ' : 'undefined data'}
                    </span>
                    <span>
                           {number}{label === 'positiveFeedback' && '%'}
                    </span>
                </li>
            </>
        );
    });
};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positiveFeedback: PropTypes.number
};