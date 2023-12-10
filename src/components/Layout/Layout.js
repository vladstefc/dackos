import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Main from "../Pages/Main";
import MainPagePortfolio from "../Pages/MainPagePortfolio";
import Services from "../Pages/Services";
import Testimonials from "../Pages/Testimonials";
import Footer from "./Footer";

const Layout = () => {
  return (
    <section>
      <Main />
      <About />
      <MainPagePortfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </section>
  );
};

export default Layout;
