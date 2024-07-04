import HomeCause from "./homeCause/HomeCause";
import HomeDonation from "./homeDonation/HomeDonation";
import HomePercentage from "./homePercentage/HomePercentage";
import HomePersuasion from "./homePersuasion/HomePersuasion";
import HomePromotion from "./homePromotion/HomePromotion";
import HomeSlide from "./homeSlide/HomeSlide";

function Homepage() {
  return (
    <div>
      <HomeSlide />
      <HomePromotion />
      <HomePercentage />
      <HomeCause />
      <HomeDonation />
      <HomePersuasion />
    </div>
  );
}

export default Homepage;
