export default function HeroSectiondesign2(props: any) {
  return (
    <div className="flex flex-col-reverse w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 md:flex-row md:items-center md:space-x-20 py-14">
      <div className="w-full space-y-12">
        <div className="space-y-6">
            <h1 className="text-white xl:text-5xl text-center text-3xl font-extrabold xl:leading-[4rem] leading-[3rem]  ">
              {props.heading}
            </h1>
          <p className="w-full mx-auto text-sm text-center font-light text-white/80 lg:text-lg">
            {props.ptag}
          </p>
        </div>
      </div>
    </div>
  );
}