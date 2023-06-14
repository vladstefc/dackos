import { Container } from "@mui/material";
import logo from "../../assets/images/logo.jpg";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Main from "../Pages/Main";
import Portfolio from "../Pages/Portfolio";
import Testimonials from "../Pages/Testimonials";
import Footer from "./Footer";

const Layout = () => {
  return (
    <section>
      {/* <Container maxWidth="xl"> */}
      <Main />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      {/* </Container> */}
    </section>
  );
};

export default Layout;
