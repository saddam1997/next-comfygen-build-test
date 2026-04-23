
import dynamic from 'next/dynamic';

const FaqSectionClient = dynamic(() => import('./FaqContentClient'), {
  ssr: false,
});


const Index = ({ faqData }: any) => {
  return <FaqSectionClient Data={faqData} />;
};

export default Index




