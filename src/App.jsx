import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Testimonials from "./Components/Testimonials/Testimonials";
import Title from "./Components/Title/Title";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title subTitle="Our Program" title="What We Offer" />
      <Programs />
      <About />
      <Title subTitle="Gallery" title="Institute Photos" />
      <Campus />
      <Title subTitle="TESTIMONIALS" title="What Our Student Says" />
      <Testimonials />
      <Title subTitle="CONTACT US" title="Get In Touch" />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
