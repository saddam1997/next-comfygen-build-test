import Slider from "./Slider";

export default function Portfolio({ Portfoliodata }) {


  return (
    <section className="w-full py-10 ">
      <Slider Portfoliodata={Portfoliodata} />
    </section>
  );
}


