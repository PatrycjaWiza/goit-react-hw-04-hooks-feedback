import { useState } from 'react';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';

export const Feedback = () => {
  const [good, setGoodValue] = useState(0);
  const [neutral, setNeutralValue] = useState(0);
  const [bad, setBadValue] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [positiveFeedback, setPositiveFeedback] = useState(0);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={() => {
            setGoodValue(good + 1);
            setTotalFeedback(totalFeedback + 1);
            setPositiveFeedback(
              (((good + 1) / (totalFeedback + 1)) * 100).toFixed(0)
            );
          }}
          onLeaveFeedback="Good"
        />
        <FeedbackOptions
          options={() => {
            setNeutralValue(neutral + 1);
            setTotalFeedback(totalFeedback + 1);
            setPositiveFeedback(
              ((good / (totalFeedback + 1)) * 100).toFixed(0)
            );
          }}
          onLeaveFeedback="Neutral"
        />
        <FeedbackOptions
          options={() => {
            setBadValue(bad + 1);
            setTotalFeedback(totalFeedback + 1);
            setPositiveFeedback(
              ((good / (totalFeedback + 1)) * 100).toFixed(0)
            );
          }}
          onLeaveFeedback="Bad"
        />
      </Section>

      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedback}
          />
        )}
      </Section>
    </>
  );
};
