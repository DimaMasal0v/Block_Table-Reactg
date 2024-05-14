import React from 'react';
import './App.css';
import Header from './header.js';
import Title from './header-title.js';
import Awards from './awards.js';
import AboutUs from './About-us.js';
import Block from './Block.js';

// JSON
import header from './json/header'; 
import about from './json/text__about__us';
import awards from './json/awards';
import text__clients from './json/text__clients.json';
import services from './json/text__block.json'; 


const App = () => {
  // Создаем массив объектов для блоков
  const blocks = [
    { title: services.services.titleArc, description: services.services.descriptionArc },
    { title: services.services.titleBuild, description: services.services.descriptionBuild },
    { title: services.services.titleConstruct, description: services.services.descriptionConstruct }
  ];

  return (
    <>
      <Header />
      <Title title={header.title} subtitle={header.subtitle} />
      <Awards 
        title={awards.awardsSection.title}
        imgSrcGerman={awards.awardsSection.imgSrcGerman}
        textGerman={awards.awardsSection.textGerman}
        textGold={awards.awardsSection.textGold}
        textDesign={awards.awardsSection.textDesign}
        textGood={awards.awardsSection.textGood}
      />
      <AboutUs 
        aboutUsTitle={about.aboutUs.title}
        aboutUsSubtitle={about.aboutUs.subtitle}
        description={about.aboutUs.description}
        clientsPercentage={text__clients.statistics.clientsPercentage.text}
        clientsText={text__clients.statistics.clientsText.text}
        employeesNumber={text__clients.statistics.employeesNumber.text}
        employeesText={text__clients.statistics.employeesText.text}
        projectsCompleted={text__clients.statistics.projectsCompleted.text}
        projectsText={text__clients.statistics.projectsText.text}
      />
      <Block blocks={blocks} />
    </>
  );
}

export default App;
