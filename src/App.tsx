import "./App.css";
import "@mantine/core/styles.css";

import NavigationBar from "./components/navigation/NavigationBar";

import HomeSlide from "./pages/homepage/homeSlide/HomeSlide";
import HomePromotion from "./pages/homepage/homePromotion/HomePromotion";
import HomeCause from "./pages/homepage/homeCause/HomeCause";
import HomeDonation from "./pages/homepage/homeDonation/HomeDonation";
import HomePersuasion from "./pages/homepage/homePersuasion/HomePersuasion";
import Footer from "./components/footer/Footer";
import HomePercentage from "./pages/homepage/homePercentage/HomePercentage";

function App() {
  return (
    <>
      <NavigationBar />
      <HomeSlide />
      <HomePromotion />
      <HomePercentage />
      <HomeCause />
      <HomeDonation />
      <HomePersuasion />
      <Footer />
    </>
  );
}

export default App;
