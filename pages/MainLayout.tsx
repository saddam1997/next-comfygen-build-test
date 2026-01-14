import Footer from '../components/Newcomponet/layout/Footer';
import GetinTouch from '../components/Newcomponet/SectionCompoent/GetinTouch';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>

      <GetinTouch />
      <Footer />
    </>
  );
}