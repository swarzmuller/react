import React from 'react';
import './SeeResults.scss';
import {Button} from '../Button/Button';

export class ResultContent extends React.Component {
    render() {
        return (
            <section >
                <div className="result-content">
                    <div className="result-content-item">
                        <p className="text-res"><span className="result-content-accent">Вы не готовы отказаться от вкусной еды</span>,
                            поэтому
                            все диеты воспринимаются вами, как неприятность,
                            которую просто нужно пережить. <span className="result-content-accent">Со спортом у вас тоже натянутые отношения</span>
                            — то ли из-за нехватки времени,
                            то ли из-за отсутствия желания.</p>
                        <p className="text-res">
                            <span className="result-content-accent">Строгие диеты вам категорически не подходят,</span>
                            поэтому рекомендуем обратить внимание на способ
                            похудения
                            с минимальным количеством ограничений в рационе. Такой является низкоуглеводная <span
                            className="result-content-accent">кето-диета. </span>
                            Придерживаясь этой диеты <span className="result-content-accent">вы все так же можете продолжать есть вкусные и любимые продукты:
                            морепродукты, сыр, мясо, молочные продукты и даже майонез.</span> Правда при условии, что
                            последний будет приготовлен
                            из проверенных ингредиентов. При этом, конечно, придется поубавить аппетит к сахару, мучному
                            и фруктам.
                        </p>
                        <p className="text-res">
                            <span className="result-content-accent">Кето-диета поможет постепенно перестроить организм, научить его “питаться” не углеводами, а жирами. </span>
                            Чтобы усилить действие данной диеты, достаточно просто больше ходить пешком и пить больше
                            воды.
                        </p>
                    </div>

                    <div className="result-content-item">
                        <span className="result-content-accent"> Особенностью кето-диеты является глубокая физиологическая перестройка организма. </span>
                        <p className="text-res"> Поэтому
                            даже с высокой степенью здоровья организма важно быть готовыми к ряду побочных эффектов:
                            вялости,
                            головным болям, тошноте, проблемах с желудком
                            и длительному периоду вхождения в кетоз (состояние,
                            при котором начинает сжигаться жир).</p>

                        <p className="text-res"> <span className="result-content-accent">Но всегда можно найти выход, не отказываясь
                            от достаточно эффективной диеты.</span> Негативные последствия кето-диеты можно устранить
                            специальными
                            полезными добавками. Рекомендуем обратить внимание на одно средство такого рода — <a href="" className="linka">Keto
                            Eat&Fit.</a>
                        </p>
                        <p className="text-res">
                            Этот продукт рекомендуют профессиональные
                            диетологи, так как он безопасен для здоровья и помогает
                            худеть без побочных эффектов. Благодаря Keto Eat&Fit можно в два раза быстрее достичь кетоза
                            и начать
                            сжигать жир быстрее. Доказано, что кето-диета вместе
                            с Keto Eat&Fit позволяют похудеть за месяц до 12 кг!
                            Вы сможете худеть и не чувствовать, что вам это
                            в тягость.
                        </p>
                    </div>

                </div>
                <div className="prod-link">
                    Подробнее ознакомиться с Keto Eat&Fit вы можете на <a className="linka" href="">официальном
                    сайте</a>
                </div>
                <div className="res-btnblock">
                    <a href="">
                        <Button
                            iconName={""}
                            variant={"Узнать больше Keto Eat&Fit"}
                        />
                    </a>
                </div>
            </section>


        );
    }
}