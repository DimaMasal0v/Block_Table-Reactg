import React from "react";
import "./App.css";
import Header from "./header.tsx";
import Title from "./header-title.tsx";
import Awards from "./awards.tsx";
import AboutUs from "./About-us.tsx";
import Block from "./Block.tsx";
import CFBlock from "./CFBlock.tsx";
import Footer from "./footer.tsx";

// JSON
import header from "./json/header";
import about from "./json/text__about__us";
import awardsData from "./json/awards.json";
import text__clients from "./json/text__clients.json";
import services from "./json/text__block.json";
import recent from "./json/text__recent.json";
import footerData from "./json/footer.json";


const App = () => {
  const blocks = services.services.map((service) => ({
    title: service.title,
    description: service.description,
    img: service.imageSrc,
  }));
  const awardsTitle = awardsData.awards.title;
  const awardsList = awardsData.awards.list.map((award, index) => ({
    img: award.imgSrc,
    text: award.text,
    containerId: award.containerId,
    imgId: award.imgId,
    textId: award.textId,
    imgAlt: award.imgAlt,
  }));
  const aboutUsImages = [
    { src: about.aboutUs.aboutus__img, alt: "About Us Image 1" },
    { src: about.aboutUs.aboutus__img1, alt: "About Us Image 2" },
  ];

  const aboutUsStatistics = [
    { value: text__clients.statistics.clientsPercentage.text, text: text__clients.statistics.clientsText.text },
    { value: text__clients.statistics.employeesNumber.text, text: text__clients.statistics.employeesText.text },
    { value: text__clients.statistics.projectsCompleted.text, text: text__clients.statistics.projectsText.text },
  ];
  return (
    <>
      <Header logo={header.logo}/>
      <Title title={header.title} subtitle={header.subtitle} />
      <Awards title={awardsTitle} awards={awardsList} />
      <AboutUs
        aboutUsTitle={about.aboutUs.title}
        aboutUsSubtitle={about.aboutUs.subtitle}
        description={about.aboutUs.description}
        images={aboutUsImages}
        statistics={aboutUsStatistics}
      />
      <Block blocks={blocks} />
      <CFBlock recentWorks={recent.recentWorks} />
      <div class="container_two-line mt-10"></div>
      <Footer
        title={footerData.footer.title}
        sendHi={footerData.footer.sendHi}
        location={footerData.footer.location}
        emailLabel={footerData.footer.emailLabel}
        email={footerData.footer.email}
        phoneLabel={footerData.footer.phoneLabel}
        phone={footerData.footer.phone}
        copyright={footerData.footer.copyright}
        connectLabel={footerData.footer.connectLabel}
        socialIcons={footerData.footer.socialIcons}
      />
    </>
  );
};

export default App;
