import About from '@/components/About';
import Footer from '@/components/Footer';
import Landing from '@/components/Hero/Landing';
import Header from '@/components/NavBar/Header';

const page = () => {
  return (
    <>
      <Header />
      <main
        id='main-section'
        className='pt-40 text '>
        <Landing />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default page;
