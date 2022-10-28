import React from "react";
import Question from "./Question";
import { nanoid } from 'nanoid';


const GameScreen = () => {

    const [questions, setQuestions] = React.useState([]);
    const [loadMoreQuestions, setLoadMoreQuestions] = React.useState(false);

    const handleData = (results) => {
        setQuestions(results);
    }

    React.useEffect(function () {
        fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
            .then(res => res.json())
            .then(data => handleData(data.results))
    }, [loadMoreQuestions])

    const loadQuestions = () => {
        setLoadMoreQuestions(!loadMoreQuestions);
    }

    // somehow up here you need to send the answers down in a random order

    const shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      }

    questions.forEach(question => {
        question.answers = shuffleArray([...question.incorrect_answers, question.correct_answer])
    });

    // questions.forEach(question => {
    //     console.log(question.answers)
    // })

    return (
        <div>
            {questions.map(question => <Question
                key={nanoid()}
                quest={question.question}
                correct={question.correct_answer}
                incorrect={question.incorrect_answers}
                answers={question.answers}
            />)}
            <button onClick={loadQuestions}>Load More Questions</button>
        </div>

    )
}

export default GameScreen;