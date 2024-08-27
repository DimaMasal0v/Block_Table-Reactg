import React from "react";
import "./App.css";
import Header from "./header";
import Title from "./header-title";
import Awards from "./awards";
import AboutUs from "./About-us";
import Block from "./Block";
import CFBlock from "./CFBlock";
import Footer from "./footer";

// JSON
import header from "./json/header.json";
import about from "./json/text__about__us.json";
import awardsData from "./json/awards.json";
import text__clients from "./json/text__clients.json";
import services from "./json/text__block.json";
import recent from "./json/text__recent.json";
import footerData from "./json/footer.json";

// Интерфейсы для данных

interface BlockData {
  id: string;
  title: string;
  description: string;
  img: string;
}

interface Award {
  img: string;
  text: string;
  containerId: string;
}

interface AboutUsImage {
  src: string;
  alt: string;
  id: string;
}

interface Statistic {
  value: string;
  text: string;
  id: string;
}

const App: React.FC = () => {
  const blocks: BlockData[] = services.services.map((service) => ({
    id: service.id, // Уникальный идентификатор
    title: service.title,
    description: service.description,
    img: service.imageSrc,
  }));

  const awardsTitle: string = awardsData.awards.title;
  const awardsList: Award[] = awardsData.awards.list.map((award) => ({
    img: award.imgSrc,
    text: award.text,
    containerId: award.containerId, // Уникальный идентификатор
  }));

  const aboutUsImages: AboutUsImage[] = [
    { src: about.aboutUs.aboutus__img, alt: "About Us Image 1", id: "aboutUsImage1" },
    { src: about.aboutUs.aboutus__img1, alt: "About Us Image 2", id: "aboutUsImage2" },
  ];

  const aboutUsStatistics: Statistic[] = [
    { value: text__clients.statistics.clientsPercentage.text, text: text__clients.statistics.clientsText.text, id: "clientsPercentage" },
    { value: text__clients.statistics.employeesNumber.text, text: text__clients.statistics.employeesText.text, id: "employeesNumber" },
    { value: text__clients.statistics.projectsCompleted.text, text: text__clients.statistics.projectsText.text, id: "projectsCompleted" },
  ];

  return (
    <>
      <Header logo={header.logo} />
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
      <div className="container_two-line mt-10"></div>
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
