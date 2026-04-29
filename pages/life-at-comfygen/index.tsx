import JSON_DATA from "./life.json";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"
import Gallery from "../../components/Gallery";
import Slider from "../../components/Slider"
export default function lifeatcompany() {
  return (
    <>
      <div className="overflow-hidden">
        <HeroSectionNewCls Data={JSON_DATA.Herosection} />
        <Gallery Data={JSON_DATA.Gallery} />
        <Slider Data={JSON_DATA.Glimpses} />
        <Gallery Data={JSON_DATA.Anniversary} />
        <Slider Data={JSON_DATA.Awards} />
      </div>
    </>
  );
}
