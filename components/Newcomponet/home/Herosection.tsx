import HerosectionFroLcp from "./HerosectionFroLcp";
import dynamic from "next/dynamic";

const HeroClientUI = dynamic(() => import("./HeroClientUI"), {
  ssr: true,
});

export default function Herosection(props: any) {
  return (
    <HerosectionFroLcp  openModal={props.openModal} ptag={props.ptag}>
      <HeroClientUI
        bgImage={props.bgImage}
        openModal={props.openModal}
        closeModal={props.closeModal}
        talkToExpertModal={props.talkToExpertModal}
      />
    </HerosectionFroLcp>
  );
}
