import HerosectionFroLcp from "./HerosectionFroLcp";
import dynamic from "next/dynamic";

const HeroClientUI = dynamic(() => import("./HeroClientUI"), {
  ssr: false,
});

export default function Herosection(props: any) {
  return (
    <HerosectionFroLcp ptag={props.ptag}>
      <HeroClientUI
        bgImage={props.bgImage}
        openModal={props.openModal}
        closeModal={props.closeModal}
        talkToExpertModal={props.talkToExpertModal}
      />
    </HerosectionFroLcp>
  );
}
