import React from 'react';
import './SeeResults.scss';

export class ResultCircle extends React.Component {
    render() {
        const { description, modificator, value } = this.props;


        return (
            <div className="progress-circle-wrap">
                <div id="cont" className="progress-circle" data-pct="">
                    <span className="progress-circle__percent">{value}</span>
                    <svg className="progress-circle__svg" width="140" height="140" viewBox="0 0 140 140">
                        <linearGradient id="gradient" x1="40%" y1="10%" x2="40%" y2="70%">
                            <stop offset="0%" stopColor="#5cbce0" />
                            <stop offset="100%" stopColor="#03a0db " />
                        </linearGradient>
                        <circle cx="70" cy="70" r="60" fill="none" stroke="#eaf0f2" strokeWidth="20" />
                        <circle className={`progress-circle__circle ${modificator}`} cx="70" cy="70" r="60" fill="none" strokeWidth="20" strokeDasharray="376.991" strokeDashoffset="376.991" stroke="url(#gradient)" />
                    </svg>
                </div>
                <div className="progress-circle__desc">
                    {description}
                </div>
            </div>
        );
    }
}