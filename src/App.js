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
  return (
    <>
      <Header />
      <Title title={header.title} subtitle={header.subtitle} />
      <Awards 
        title={awards.awardsSection.title}
        imgSrc1={awards.awardsSection.imgSrc1}
        text1={awards.awardsSection.text1}
        text2={awards.awardsSection.text2}
        text3={awards.awardsSection.text3}
        text4={awards.awardsSection.text4}
      />
      <AboutUs 
        aboutustitle={about.aboutUs.title}
        aboutussubtitle={about.aboutUs.subtitle}
        description={about.aboutUs.description}
        clientsPercentage={text__clients.statistics.clientsPercentage.text}
        clientsText={text__clients.statistics.clientsText.text}
        employeesNumber={text__clients.statistics.employeesNumber.text}
        employeesText={text__clients.statistics.employeesText.text}
        projectsCompleted={text__clients.statistics.projectsCompleted.text}
        projectsText={text__clients.statistics.projectsText.text}
      />
      <Block id={services.services.id} />
    </>
  );
}

export default App;


