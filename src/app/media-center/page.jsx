import Footer from "../components/Footer";
import Header from "../components/Header";
import AwardsRecognitions from "../components/MediaAwards";
import MediaCentreHero from "../components/MediaCenterHero";

export default function MediaCenterPage() {
  return (
    <>
   <Header></Header>
   <MediaCentreHero></MediaCentreHero>
   <AwardsRecognitions></AwardsRecognitions>
   <Footer></Footer>
    </>
  );
}