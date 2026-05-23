import Card from "../ui/Card"
import HeadingTwo from "../ui/HeadingTwo";

export default function Index({ emerging }: any) {
  return (
    <section className="py-10 lg:py-20 ">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 text-center">
          <div className="flex flex-col justify-center text-center mx-auto">

            <HeadingTwo color={"#212121"} text={emerging.heading} />
            <p
              className="pt-4 text-sm"
              dangerouslySetInnerHTML={{ __html: emerging.description }}
            />
          
          </div>

          <div className="grid gap-12 pt-8 text-left lg:grid-cols-3 md:grid-cols-2 mt-5">
            {emerging?.Emerging?.map((elem: any, index:any) => {
        
              return (
                <div key={index} className="">
                  <Card Data={elem}/>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}