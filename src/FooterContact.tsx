import React from 'react';
import './App.css';

// Определение интерфейса для пропсов компонента FooterContact
interface FooterContactProps {
  location: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
}

const FooterContact: React.FC<FooterContactProps> = ({
  location,
  emailLabel,
  email,
  phoneLabel,
  phone,
}) => {
  return (
    <div className="flex-col text-left sm:text-right">
      <h3 className="text-xl">{location}</h3>
      <span>{emailLabel}</span>
      <p dangerouslySetInnerHTML={{ __html: email }}></p>
      <span>{phoneLabel}</span>
      <p>{phone}</p>
    </div>
  );
};

export default FooterContact;
