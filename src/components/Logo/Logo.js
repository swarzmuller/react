import React from 'react';
import './Logo.scss'

export class Logo extends React.Component {
    render() {
        const { description } = this.props;

        return (
            <div className="logo">
                <div className="logo__pic">
                    {/* <img src="images/logo.png" className="logo__img" alt="logo" /> */}
                    <img src={`${window.cdn_path}images/logo.png`} className="logo__img" alt="logo" />
                </div>
                <p className="logo__desc">{description}</p>
            </div>
        );
    }
}