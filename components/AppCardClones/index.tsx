import Card from "./Card";

const AppCard = ({ AppClons}:any) => {
  return (
    <div className="container mb-8 mx-auto">
      <h2 className="text-3xl px-1 mt-6 text-center font-bold mb-6 max-w-8xl">
        {AppClons.title}
      </h2>

      <p
        className="text-md text-center px-1 mx-auto mb-6 max-w-5xl"
        dangerouslySetInnerHTML={{ __html: AppClons.subtitle }}
      />

      {/* 👇 Client Component only for interactivity */}
      <Card cards={AppClons.clons} />
    </div>
  );
};

export default AppCard;