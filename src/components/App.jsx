import shortid from "shortid";
import { useState } from "react";

import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

const App = () =>  {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const handleGoodCommentIncrement = () => {
    setGood(good + 1);
  };

  const handleBadCommentIncrement = () => {
    setBad(bad + 1);
  };
  
  const handleNeutralCommentIncrement = () => {
    setNeutral(neutral + 1);
  };
  
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total && Math.round((good * 100) / total);
  };
    
  return (
    <>
    <Section title="⭐ Leave your feedback please ⭐">
        <FeedbackOptions
                key={shortid.generate()} 
                option={"good"}
                onLeaveFeedback={handleGoodCommentIncrement}
            />
        <FeedbackOptions
                key={shortid.generate()} 
                option={"bad"}
                onLeaveFeedback={handleBadCommentIncrement}
            />
        <FeedbackOptions
                key={shortid.generate()}
                option={"neutral"}
                onLeaveFeedback={handleNeutralCommentIncrement}
            />
    </Section>
    <Section title="Statistics">
        {good > 0 || neutral > 0 || bad > 0 ?
        <ul>
            <Statistics key={shortid.generate()} good={good}/>
            <Statistics key={shortid.generate()} neutral={neutral}/>
            <Statistics key={shortid.generate()} bad={bad}/>
            <Statistics key={shortid.generate()} total={countTotalFeedback()}/>
            <Statistics key={shortid.generate()} positiveFeedback={countPositiveFeedbackPercentage()}/>
        </ul> :
        <Notification/>}
    </Section>
    </>
    );
};

export default App;