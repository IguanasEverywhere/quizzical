import React from "react";
import AnswersArea from "./AnswersArea";

const Question = (props) => {

    const incorrectAnswers = [...props.incorrect];
    const correctAnswer = props.correct;

    const [isAnsweredCorrectly, setIsAnsweredCorrectly] = React.useState(false);

    return (
        <div>
            <h1>{props.quest}</h1>
            <div><AnswersArea
                incorrectAnswers={incorrectAnswers}
                correctAnswer={correctAnswer}
                markCorrect={() => setIsAnsweredCorrectly(true)}
                markIncorrect={() => setIsAnsweredCorrectly(false)} />
            </div>
            <h3>{isAnsweredCorrectly ? "right" : "wrong"}</h3>
            <hr></hr>
        </div>
    )
}

export default Question;