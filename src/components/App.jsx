import { Component } from "react";
import shortid from "shortid";

import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleGoodCommentIncrement = () => {
    this.setState((prevState) => ({ good: prevState.good + 1}));
  };

  handleBadCommentIncrement = () => {
    this.setState({ bad: this.state.bad + 1});
  };
  
  handleNeutralCommentIncrement = () => {
    this.setState({ neutral: this.state.neutral + 1});
  };
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const { good } = this.state; 
    return total && Math.round((good * 100) / total);
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          {Object.keys(this.state).map(key => {
            // eslint-disable-next-line default-case
            let option = null;
            switch(key) {
              case 'good':
                  option = <FeedbackOptions
                  key={shortid.generate()} 
                  option={key}
                  onLeaveFeedback={this.handleGoodCommentIncrement}
                />
                break;
              case 'bad':
                  option = <FeedbackOptions
                  key={shortid.generate()} 
                  option={key}
                  onLeaveFeedback={this.handleBadCommentIncrement}
                />
                break;
              case 'neutral':
                  option = <FeedbackOptions
                  key={shortid.generate()}
                  option={key}
                  onLeaveFeedback={this.handleNeutralCommentIncrement}
                />
                break;
              default: break;
            };
            return option;
            })}
        </Section>
        <Section title="Statistics">
          {this.state.good > 0 || this.state.neutral > 0 || this.state.bad > 0 ?
          <ul>
              <Statistics
              key={shortid.generate()}
              good={this.state.good}
            />
              <Statistics
              key={shortid.generate()}
              neutral={this.state.neutral}
            />
              <Statistics
              key={shortid.generate()}
              bad={this.state.bad}
            />
              <Statistics
              key={shortid.generate()}
              total={this.countTotalFeedback()}
            />
              <Statistics
              key={shortid.generate()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            />
          </ul> :
          <Notification/>}
        </Section>
      </>
    );
  };
};

export default App;