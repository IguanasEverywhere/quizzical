import React from "react";
import Question from "./Question";
import { nanoid } from 'nanoid';


const GameScreen = (props) => {

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

    return (
        <div>
            {questions.map(question => <Question
                key={nanoid()}
                quest={question.question}
                correct={question.correct_answer}
                incorrect={question.incorrect_answers}
            />)}
            <button onClick={loadQuestions}>Load More Questions</button>
        </div>

    )
}

export default GameScreen;