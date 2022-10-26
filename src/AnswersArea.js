import React, { useEffect } from "react";
import { nanoid } from "nanoid";

const AnswersArea = (props) => {

    const rawAnswers = [...props.incorrectAnswers, props.correctAnswer];

    const answerObjects = [];
    rawAnswers.forEach(answer => {
        answerObjects.push({
            key: nanoid(),
            answerText: answer,
            isSelected: false,
        })
    });

    const [selectedAnswerObjects, setSelectedAnswerObjects] = React.useState(answerObjects);

    const handleAnswerClick = (answerText) => {
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

    const updateCorrect = () => {
        selectedAnswerObjects.forEach(object => {
            if (object.isSelected === true && object.answerText === props.correctAnswer) {
                props.markCorrect();
            } else {
                props.markIncorrect();
            }
        })
    }

    useEffect(() => {
        updateCorrect();
    });

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