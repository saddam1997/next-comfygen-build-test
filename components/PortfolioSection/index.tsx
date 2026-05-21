import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";
import Slider from "./Slider";
import SliderWrapper from "./SliderWrapper";

export default function Portfolio({ Portfoliodata }) {


  return (
    <div className="w-full py-5 ">
      <section className="text-center space-y-2 lg:py-5 py-3 lg:px-16">
        <HeadingTwo color="black" text={Portfoliodata?.heading} />
        <ParagraphText color="black" text={Portfoliodata?.description} />
      </section>
   
      <SliderWrapper Portfoliodata={Portfoliodata} />
    </div>
  );
}


