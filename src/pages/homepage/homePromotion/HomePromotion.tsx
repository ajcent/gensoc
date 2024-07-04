import { SimpleGrid } from "@mantine/core";
import PromotionCard from "../../../components/promotionCard/PromotionCard";
import "./HomePromotion.css";

import getGridResponsive from "../../../utils/getGridResponsive";
import getPaddingResponsive from "../../../utils/getPaddingResponsive";

function HomePromotion() {
  const gridResponsive = getGridResponsive();
  const paddingResponsive = getPaddingResponsive();

  return (
    <section id="hero-promotion">
      <SimpleGrid cols={gridResponsive} px={paddingResponsive}>
        <PromotionCard
          src="https://th.bing.com/th/id/R.e8c21b23f141412c85b6e76519256af2?rik=5RtOeHU6KbGx%2bw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-Io45bE3oiG0%2fUjk8Rgi-BlI%2fAAAAAAAACQo%2fAKh-xyQ5hGs%2fs1600%2fEmma%2bWatson8-789-8.jpg&ehk=IJ%2faz4FAZ9PrnrHubr4A1BRCExatNjHwM6h6QuajijM%3d&risl=&pid=ImgRaw&r=0"
          name="Emma Watson"
          description="English Actress"
          message="“Men—I would like to take this opportunity to extend your formal invitation. Gender equality is your issue too.”"
        />
        <PromotionCard
          src="https://images.genius.com/70665ecfd6195a84b7b6ac3bbca7a815.400x400x1.jpg"
          name="Vice Ganda"
          description="Filipino Entertainer"
          message="“First I believe must educate themselves. Everyone must be able understand what is LGBTQIA+, what kind of people they are, because if you don't understand the person, then you don't fully embrace his/her totality.”"
        />
      </SimpleGrid>
    </section>
  );
}

export default HomePromotion;
