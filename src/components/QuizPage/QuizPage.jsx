import React from 'react';
import './QuizPage.scss';
import { Button } from '../Button/Button';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { OptionsSection } from '../OptionsSection/OptionsSection';
import { QuizSection } from '../QuizSection/QuizSection';

const quizSettings = [
    {
        question: 'От чего вам сложнее всего отказаться?',
        answers: ['Мясо', 'Мучные продукты и десерты', 'Алкоголь']
    },
    {
        question: 'В диете вам больше всего НЕ нравится…',
        answers: ['Чувствовать упадок сил', 'Ограничивать себя в еде', 'Справиться с расстройством желудка', 'Само понятие диет — не сижу на них']
    },
    {
        question: 'Готовы ли вы худеть без ограничений в питании?',
        answers: ['Конечно', 'Не думаю, что такое возможно']
    },
    {
        question: 'Думаете ли вы периодически о каком-то любимом блюде?',
        answers: ['Постоянно', 'Очень редко', 'Никогда ']
    },
    {
        question: 'Интересуетесь ли вы калорийностью блюд, которые употребляете?',
        answers: ['Да, бывает', 'Нет, не занимаюсь таким']
    },
    {
        question: 'Как часто в вашей жизни присутствует спорт?',
        answers: ['Стабильно хожу в спортзал', 'Могу раз в месяц активизироваться', 'Мой спорт — пешие прогулки', 'Вообще не интересуюсь спортом']
    },
    {
        question: 'Сколько фото в купальнике в ваших социальных сетях?',
        answers: ['Несколько штук точно наберется', 'Я в купальнике не фотографируюсь', 'Какое фото? Мне даже стыдно на пляже раздеться']
    },
    {
        question: 'Вы обнаружили, что любимые джинсы стали малы в талии. Ваши действия:',
        answers: ['Срочно побегу в спортзал или бассейн', 'Расстроюсь и попробую ограничить потребление сладкого', 'Куплю джинсы на размер больше']
    },
    {
        question: 'Как вы считаете, высока ли у вас сила воли?',
        answers: ['Да', 'Нет']
    }
];

export class QuizPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOptions: true,
            isQuiz: false,
            quizSettings: [...quizSettings],
            currentQuestionIndex: 1,
            questionInfo: {}
        }
    }

    componentWillMount = () => {
        this.setState({
            questionInfo: this.state.quizSettings[0]
        });
    }

    goToQuizSection = () => {
        if (this.props.validateUserOptions()) return;

        this.setState({
            isOptions: false,
            isQuiz: true
        });
    };

    changeQuestion = () => {
        if (!this.props.isQuizChecked) {
            return;
        }
        this.props.deactivateQuizCheckbox();
        const { currentQuestionIndex, quizSettings } = this.state;
        if (currentQuestionIndex > quizSettings.length - 1) {
            this.setState({
                isQuiz: false
            });
            this.props.calculateResult();
        }

        let currentIndex = this.state.currentQuestionIndex;
        const currentQuiz = quizSettings.slice(currentIndex, ++currentIndex);
        this.setState({
            currentQuestionIndex: currentIndex,
            questionInfo: { ...currentQuiz[0] }
        });
    }

    render() {
        const { isVisible, onSaveUserOptions, activateQuizCheckbox } = this.props;
        const { isOptions, isQuiz, currentQuestionIndex } = this.state;
        const { question, answers } = this.state.questionInfo;

        if (isVisible) {
            return (
                <>
                    <section className="intro">
                        <section className="intro__main intro__main_quiz">
                            <ProgressBar
                                isOptions={isOptions}
                                isQuiz={isQuiz}
                                currentQuestionIndex={currentQuestionIndex}
                            />
                            <OptionsSection
                                isVisible={isOptions}
                                onSaveOptions={onSaveUserOptions}
                            />
                            <QuizSection
                                description={question}
                                checkBoxSettings={answers}
                                isVisible={isQuiz}
                                activateQuizCheckbox={activateQuizCheckbox}
                                currentQuestionIndex={currentQuestionIndex}
                            />
                            <div className="intro__btn">
                                <Button
                                    variant={"Ответить"}
                                    handleClick={isQuiz ? this.changeQuestion : this.goToQuizSection}
                                />
                            </div>
                        </section>
                    </section>
                    <section className="footnote">
                        Мы уважаем вашу личную информацию и не передадим ее третьим лицам. Отвечайте на вопросы честно.
                        Так мы сможем подобрать максимально подходящую вам методику.
                    </section>
                </>
            );
        } else {
            return null
        }
    }
}