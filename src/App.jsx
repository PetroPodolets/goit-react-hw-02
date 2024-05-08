import Description from "./components/Description/Description"
import Feedback from "../src/components/Feedback/Feedback";
import Notification from '../src/components/Notification/Notification';
import Options from '../src/components/Options/Options';
import { useEffect, useState } from 'react'



export default function App() {
  const [moods, setMoods] = useState(() => {
    const saveMoods = localStorage.getItem("save-moods");
    return saveMoods !== null ? JSON.parse(saveMoods) :
      {
        good: 0,
        neutral: 0,
        bad: 0
      }
  })

  useEffect(() => {
    localStorage.setItem("save-moods", JSON.stringify(moods))
  }, [moods])

  const reset = () => {
    setMoods({
      good: 0,
      neutral: 0,
      bad: 0
    })
  }

  const updateFeedback = feedbackType => {
    setMoods({
      ...moods,
      [feedbackType]: moods[feedbackType] + 1
    })
  }

  const totalFeedback = moods.good + moods.neutral + moods.bad;
  const positiveFeedback = Math.round((moods.good / totalFeedback) * 100);


  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} total={totalFeedback} onReset={reset} />
      {totalFeedback ? <Feedback moods={moods} total={totalFeedback} positive={positiveFeedback} /> : <Notification />}
    </>
  )
}


