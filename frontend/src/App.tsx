import AboutUs from "./components/AboutUs/AboutUs";
import Amenities from "./components/Amenities/Amenities";
import Blog from "./components/Blog/Blog";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav"; // Correct import
import Spaces from "./components/Spaces/Spaces";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";

const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <Hero></Hero>
      <AboutUs></AboutUs>
      <Spaces></Spaces>
      <Amenities></Amenities>
      <WhyChooseUs></WhyChooseUs>
      <Blog></Blog>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  );
};

export default App;
