import React from 'react';
import './App.css';
import FooterContact from './FooterContact';
import FooterSocialIcons from './FooterSocialIcons';

// Определение интерфейса для пропсов компонента Footer
interface FooterProps {
  title?: string;  // Сделаем title необязательным
  sendHi: string;
  location: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  copyright?: string;  // Сделаем copyright необязательным
  connectLabel: string;
  socialIcons: { id: string; link: string; icon: string }[];
}

const Footer: React.FC<FooterProps> = ({
  title,
  sendHi,
  location,
  emailLabel,
  email,
  phoneLabel,
  phone,
  copyright,
  connectLabel,
  socialIcons,
}) => {
  // Получаем дату сборки из переменной окружения или устанавливаем значение по умолчанию
  const buildDate = process.env.REACT_APP_BUILD_DATE || new Date().toISOString();

  // Форматируем дату в человекочитаемый вид
  const formattedBuildDate = new Date(buildDate).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Локальная функция для отображения заголовка, если он передан
  const renderTitle = () => {
    if (title) {
      return (
        <>
          <h2 className="footer-container-text">{title}</h2>
          <span className="footer-container-text-2 underline color-gold">{sendHi}</span>
        </>
      );
    }
    return null; // Если title не передан, ничего не отображаем
  };

  return (
    <footer className="relative p-0 sm:mt-24 mt-10">
      <div className="flex justify-between">
        <div className="container flex flex-col sm:px-5 px-1">
          <div className="sm:text-left">
            {renderTitle()}
          </div>
          <FooterContact
            location={location}
            emailLabel={emailLabel}
            email={email}
            phoneLabel={phoneLabel}
            phone={phone}
          />
        </div>
      </div>
      <div className="container_two-line mt-10"></div>
      <div className="container-footer relative">
        <div className="desktop-container1 grid sm:grid-rows-1 sm:grid-cols-2 grid-rows-1">
          <span className="desktop-text BodymdLight sm:text-left text-center">
            {copyright ? copyright : '© 2024 Glorincor Pharmaceuticals'}  {/* Устанавливаем значение по умолчанию, если copyright не передан */}
          </span>
          <FooterSocialIcons connectLabel={connectLabel} socialIcons={socialIcons} />
        </div>
        {/* Добавляем отображение даты сборки */}
        <div className="build-date text-sm text-center mt-4">
          Дата запуска контейнера: {formattedBuildDate}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
