import React from "react";
import { nanoid } from "nanoid";

const AnswersArea = (props) => {

    const answerObjects = [];

    props.answers.forEach(answer => {
        answerObjects.push({
            key: nanoid(),
            answerText: answer,
            isSelected: false,
        })
    });


    const [selectedAnswerObjects, setSelectedAnswerObjects] = React.useState(answerObjects);

    const handleAnswerClick = (answerText) => {
        console.log("Answer text is " + answerText + " and correct is " + props.correctAnswer)
        props.answered();
        if (answerText === props.correctAnswer) {
            props.markCorrect();
        } else {
            props.markIncorrect();
        }
        const updatedAnswers = selectedAnswerObjects.map(answerObject => {
            if (answerObject.answerText === answerText) {
               
                return {
                    ...answerObject,
                    isSelected: !answerObject.isSelected,
                   
                }
            } else {
              
                return {
                    ...answerObject,
                    isSelected: false,
                }
            }
        })
        setSelectedAnswerObjects(updatedAnswers);
    }


    let answerBtns = selectedAnswerObjects.map(answerObject => {
        return (
            <button
                key={nanoid()}
                onClick={() => handleAnswerClick(answerObject.answerText)}
                style={{
                    backgroundColor: answerObject.isSelected
                        ? "red"
                        : "blue"
                }}
            >{answerObject.answerText}</button>
        )
    })

    return (
        <div>{answerBtns}</div>
    )
}

export default AnswersArea;