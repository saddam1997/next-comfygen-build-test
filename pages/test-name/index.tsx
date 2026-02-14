import Head from 'next/head';
import dynamic from 'next/dynamic';

// Dynamic imports for components
const componentsMap: { [key: string]: any } = {
  AdviceSection: dynamic(() => import('../../components/Newcomponet/SectionCompoent/Advice')),
  ConnectWithExpertButtonHoverEffect: dynamic(() => import('../../components/Newcomponet/SectionCompoent/ConnectWithExpertButtonHoverEffect')),
  TalkExpert: dynamic(() => import('../../components/Newcomponet/SectionCompoent/TalkExpert')),
  WhyChoosee: dynamic(() => import('../omaha-poker-game-development/components/WhyChooseUs')),
};

const Post = ({ newsDetails, dynamicComponents }: any) => {
  return (
    <>
      <Head>
        <title>{newsDetails?.titlemenu || "-"}</title>
        <meta name="description" content={newsDetails?.shortdesc || "-"} />
        <meta property="og:url" content={`https://comfyblog.jamsara.com/${newsDetails?.titleurl || "-"}`} />
        <meta property="og:site_name" content="Comfygen"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${newsDetails?.titlemenu || ""} | Comfygen.com`} />
        <meta property="og:description" content={newsDetails?.shortdesc || "-"} />
        <meta property="og:image" content={newsDetails?.imageLinkUrl || "https://www.comfygen.com/images/defaultImage.png"} />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="630" />
        {/* <link rel="canonical" href={`https://www.comfynews.site/News/${newsDetails?.titleurl?.replace("/", "-").split(' ').join('-') || "-"}`} /> */}
      </Head>

      <div>
        {dynamicComponents?.map((component: any, index: number) => {
          const Component = componentsMap[component.componentId?.name];
          return Component ? <Component key={index} {...component.propValues} /> : null;
        })}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const pathname = "test-name";
  const resData = await fetch(`http://localhost:1225/api/v1/page/get?name=${pathname}`);
  const data = await resData.json();
  return {
    props: {
      newsDetails: {},
      dynamicComponents: data.data.components || []
    },
  };
}

export default Post;
