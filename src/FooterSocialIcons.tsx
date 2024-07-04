import React from 'react';
import './App.css';

interface FooterSocialIconsProps {
    connectLabel: string;
    socialIcons: string[];
}

const FooterSocialIcons: React.FC<FooterSocialIconsProps> = ({ connectLabel, socialIcons }) => {
    return (
        <div className="desktop-right-section sm:flex hidden">
            <div className="desktop-eyebrow">
                <span className="desktop-text02 BodysmtrackingWidestSemiBold">{connectLabel}</span>
                <img alt="Line" src="" className="desktop-line" />
            </div>
            {socialIcons.map((icon, index) => (
                <div key={index} className="desktop-social-icons">
                    <img alt={`Social icon ${index + 1}`} src={icon} className="desktop-socialicon" />
                </div>
            ))}
        </div>
    );
};

export default FooterSocialIcons;

