import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HomeHero";
import LoanSlider from "./components/LoanProducts";
import AboutSection from "./components/HomeAbout";
import FeedbackSlider from "./components/FeedbackSection";
import FAQComponent from "./components/FAQ";
export default function Home() {
  return (
    <>
    <Header></Header>
    <HeroSection></HeroSection>
    <LoanSlider></LoanSlider>
    <AboutSection></AboutSection>
    <FeedbackSlider></FeedbackSlider>
    <FAQComponent></FAQComponent>
    <Footer></Footer>
    </>
  );
}
