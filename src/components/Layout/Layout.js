import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Main from "../Pages/Main";
import MainPagePortfolio from "../Pages/MainPagePortfolio";
import Testimonials from "../Pages/Testimonials";
import Footer from "./Footer";

const Layout = () => {
  return (
    <section>
      <Main />
      <About />
      <MainPagePortfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </section>
  );
};

export default Layout;
