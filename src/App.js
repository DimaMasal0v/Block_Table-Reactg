import React from 'react';
import './App.css';
import Header from './header.js';
import Title from './header-title.js';
import Awards from './awards.js';
import AboutUs from './About-us.js';
import Block from './Block.js';
import CFBlock from './CFBlock.js';

// JSON
import header from './json/header'; 
import about from './json/text__about__us';
import awardsData from './json/awards.json'; 
import text__clients from './json/text__clients.json';
import services from './json/text__block.json'; 
import recent from './json/text__recent.json';

const App = () => {
  const blocks = [
    { title: services.services.titleArc, description: services.services.descriptionArc,img:services.services.imageSrcArc },
    { title: services.services.titleBuild, description: services.services.descriptionBuild,img:services.services.imageSrcBuild },
    { title: services.services.titleConstruct, description: services.services.descriptionConstruct,img:services.services.imageSrcConstruct }
  ];
  const awardsList = [ 
    {img: awardsData.awardsSection.imgSrcGerman, text: awardsData.awardsSection.textGerman},
    {img: awardsData.awardsSection.imgSrcGold, text: awardsData.awardsSection.textGold},
    {img: awardsData.awardsSection.imgSrcDesign, text: awardsData.awardsSection.textDesign},
    {img: awardsData.awardsSection.imgSrcGood, text: awardsData.awardsSection.textGood}
  ]
  return (
    <>
      <Header />
      <Title title={header.title} subtitle={header.subtitle} />
      <Awards 
        title={awardsData.awardsSection.title}
        awards={awardsList}
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
      <CFBlock recentWorks={recent.recentWorks} />
    </>
  );
}

export default App;
