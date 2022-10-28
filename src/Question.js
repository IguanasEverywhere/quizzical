import React from "react";
import AnswersArea from "./AnswersArea";
import checkmark from "./images/checkMark.png";
import redX from "./images/redX.png"

const Question = (props) => {

    const incorrectAnswers = [...props.incorrect];
    const correctAnswer = props.correct;

    const [isAnsweredCorrectly, setIsAnsweredCorrectly] = React.useState(false);
    const [isAnswered, setisAnswered] = React.useState(false);

    const displayIcon = () => {
        let icon = isAnsweredCorrectly
            ? <img src={checkmark} alt="checkmark" className="icon"></img>
            : <img src={redX} alt="redX" className="icon"></img>

        return icon;
    }

    const reg = /&#039;|&quot;|&ldquo;|&rsquo;|&rdquo;/g
    const str = props.quest;
    const newStr = str.replace(reg, "'");

    return (
        <div className="question-body">
            <h1 className="question-header">{newStr}</h1>
            <div className="all-answers">
                <AnswersArea
                    incorrectAnswers={incorrectAnswers}
                    correctAnswer={correctAnswer}
                    answers={props.answers}
                    markCorrect={() => setIsAnsweredCorrectly(true)}
                    markIncorrect={() => setIsAnsweredCorrectly(false)}
                    answered={() => setisAnswered(true)}
                />

            </div>
            <h3>{isAnswered ? displayIcon() : null}</h3>
            <hr></hr>
        </div>
    )
}





export default Question;