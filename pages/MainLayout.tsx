import Footer from '../components/Newcomponet/layout/Footer';
import GetinTouch from '../components/Newcomponet/SectionCompoent/GetinTouch';
import LazyClientTools from './LazyClientTools';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="max-w-[1600px] mx-auto">
        {children}
        <GetinTouch />
        <Footer />
        <LazyClientTools />
      </main>
    </>
  );
}