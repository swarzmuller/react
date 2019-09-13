import React from 'react';

const introListSettings = [
    {
        amount: "295",
        description: "295 методик по похудению, одна из которых лучше всего подойдет именно вам"
    },
    {
        amount: "97,4%",
        description: "точность нашего теста, который уже прошли более 11 тыс. женщин"
    },
    {
        amount: "14",
        description: "лучших диетологов приняли участие в создании теста"
    }
];

export class IntroFooter extends React.Component {
    render() {
        return (
            <ul className="intro__list">
                <li className="intro__item">
                    <div className="intro__item-number">295</div>
                    <div className="intro__item-desc">295 методик по похудению, одна из которых лучше всего подойдет именно
                        вам
                    </div>
                </li>
                <li className="intro__item">
                    <div className="intro__item-number">97,4%</div>
                    <div className="intro__item-desc">точность нашего теста, который уже прошли более <span className="dib">11 тыс. женщин</span></div>
                </li>
                <li className="intro__item">
                    <div className="intro__item-number">14</div>
                    <div className="intro__item-desc">лучших диетологов приняли участие в создании теста</div>
                </li>
            </ul>
            //если кто то разберется как переносить строку в типе "String"
            // <ul className="intro__list">
            // {introListSettings.map((item, index) => {
            //     return (
            //         <li key={index} className="intro__item">
            //             <div className="intro__item-number">
            //                 {item.amount}
            //             </div>
            //             <div className="intro__item-desc">
            //                 {item.description}
            //             </div>
            //         </li>
            //
            //     );
            // })}
            //  </ul>
        );
    }
}