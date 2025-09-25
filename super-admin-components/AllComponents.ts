import dynamic from "next/dynamic";

export const componentsMap: { [key: string]: any } = {
  HeroSectionForAllPages: dynamic(
    () => import("../pages/componentsnew/HeroSectionForAllPages")
  ),
  AboutSection: dynamic(() => import("../pages/componentsnew/AboutSection")),
  ServicesSec: dynamic(() => import("../pages/componentsnew/ServicesSec")),
  TechStack: dynamic(() => import("../pages/componentsnew/TechStack")),
  ProcessSec: dynamic(() => import("../pages/componentsnew/ProcessSec")),
  ContactFromCenter: dynamic(
    () => import("../pages/componentsnew/ContactFromCenter")
  ),
  IndustriesServe: dynamic(
    () => import("../pages/componentsnew/IndustriesServe")
  ),
  WhyChoose: dynamic(() => import("../pages/componentsnew/WhyChooseUs")),
  HireDeveloper: dynamic(() => import("../pages/componentsnew/HireDeveloper")),
  Faq: dynamic(() => import("../pages/componentsnew/Faq")),

  //il;hg.hjgjl
  PortfolioSec: dynamic(() => import("../pages/componentsnew/PortfolioSec")),
  LatestTechnology: dynamic(() => import("../pages/components/SolutionSec")),
  Craditem: dynamic(() => import("../pages/componentsnew/Fullcards")),
  GuidSectionBlockchain: dynamic(
    () => import("../pages/ai-development/components/SocialTab")
  ),
  TowColSimpleCard: dynamic(() => import("../pages/componentsnew/TowColSimpleCard")),
  SimpleCard: dynamic(() => import("../pages/componentsnew/SimpleCard")),
  ConsultancyApproach: dynamic(() => import("../pages/componentsnew/ConsultancyApproach")),
  InfoSectionRight: dynamic(() => import("../pages/componentsnew/InfoSectionRight")),
  TowColWhiteCard: dynamic(() => import("../pages/componentsnew/TowColWhiteCard")),
  PointsCardBg:  dynamic(() => import("../pages/componentsnew/PointsCardBg")),
   InfoSectionLeft:  dynamic(() => import("../pages/components/InfoSectionLeft")),
   NumberCard: dynamic(() => import("../pages/componentsnew/NumberCard")),
   ModelsSec: dynamic(() => import("../pages/components/ModelsSec")),
   NewSection: dynamic(() => import("../pages/components/ModelsSec")),
   headingSec: dynamic(() => import("../pages/componentsnew/headingSec")),
};
