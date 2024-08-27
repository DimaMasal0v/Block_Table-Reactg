import React from 'react';
import './App.css';

// Определение интерфейса для SocialIcon
interface SocialIcon {
  id: string;
  link: string;
  icon: string;
}

// Определение интерфейса для пропсов компонента FooterSocialIcons
interface FooterSocialIconsProps {
  connectLabel: string;
  socialIcons: SocialIcon[];
}

const FooterSocialIcons: React.FC<FooterSocialIconsProps> = ({ connectLabel, socialIcons }) => {
  return (
    <div className="desktop-right-section sm:flex hidden">
      <div className="desktop-eyebrow">
        <span className="desktop-text02 BodysmtrackingWidestSemiBold">{connectLabel}</span>
        <img alt="Line" src="" className="desktop-line" />
      </div>
      {socialIcons.map(({ id, icon }) => (
        <div key={id} className="desktop-social-icons">
          <img alt={`Social icon ${id}`} src={icon} className="desktop-socialicon" />
        </div>
      ))}
    </div>
  );
};

export default FooterSocialIcons;
