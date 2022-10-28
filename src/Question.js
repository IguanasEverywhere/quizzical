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

    const reg = /&#039;|&quot;/g
    const str = props.quest;
    const newStr = str.replace(reg, "'");

    return (
        <div>
            <h1>{newStr}</h1>
            <div><AnswersArea
                incorrectAnswers={incorrectAnswers}
                correctAnswer={correctAnswer}
                markCorrect={() => setIsAnsweredCorrectly(true)}
                markIncorrect={() => setIsAnsweredCorrectly(false)}
                answered={() => setisAnswered(true)}
            />
            </div>

            <h3>{isAnswered ? displayIcon() : "Click the Right Answer"}</h3>
            <hr></hr>
        </div>
    )
}





export default Question;