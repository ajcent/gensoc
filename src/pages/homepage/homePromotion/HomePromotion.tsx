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
          name="Emma Watson"
          description="Role"
          message="“Men—I would like to take this opportunity to extend your formal invitation. Gender equality is your issue too.”"
        />
        <PromotionCard
          name="Vice Ganda"
          description="Role"
          message="“First I believe must educate themselves. Everyone must be able understand what is LGBTQIA+, what kind of people they are, because if you don't understand the person, then you don't fully embrace his/her totality.”"
        />
      </SimpleGrid>
    </section>
  );
}

export default HomePromotion;
