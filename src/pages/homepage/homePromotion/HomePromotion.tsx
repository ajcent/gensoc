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
          src="https://github.com/ajcent/gensoc/blob/main/public/homepage/emma_watson.jpg?raw=true"
          name="Emma Watson"
          description="English Actress"
          message="“Men—I would like to take this opportunity to extend your formal invitation. Gender equality is your issue too.”"
        />
        <PromotionCard
          src="https://github.com/ajcent/gensoc/blob/main/public/homepage/vice_ganda.jpg?raw=true"
          name="Vice Ganda"
          description="Filipino Entertainer"
          message="“First I believe must educate themselves. Everyone must be able understand what is LGBTQIA+, what kind of people they are, because if you don't understand the person, then you don't fully embrace his/her totality.”"
        />
      </SimpleGrid>
    </section>
  );
}

export default HomePromotion;
