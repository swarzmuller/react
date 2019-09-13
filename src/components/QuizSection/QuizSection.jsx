import React from 'react';
import { IntroExplanation } from '../Intro/IntroExplanation';
import { Checkbox } from '../Checkbox/Checkbox';

export class QuizSection extends React.Component {

    render() {
        const { isVisible, description, checkBoxSettings, activateQuizCheckbox, currentQuestionIndex } = this.props;

        if (isVisible) {
            return (
                <>
                    <IntroExplanation description={description} />
                    <section className="controls">
                        {checkBoxSettings.map((item, index) => {
                            return <Checkbox key={`${currentQuestionIndex}${index}`} variant={item} clickHandler={activateQuizCheckbox} />
                        })}
                    </section>
                </>
            );
        } else {
            return null
        }
    }
}