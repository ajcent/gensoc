import "./Culture.css";

import { Center, Group, Paper } from "@mantine/core";
import MainImage from "../../components/mainImage/MainImage";
import HoverCard from "../../components/hoverCard/HoverCard";
import getPaddingResponsive from "../../utils/getPaddingResponsive";

function Culture() {
  const paddingResponsive = getPaddingResponsive();

  return (
    <Paper
      radius={0}
      component="div"
      style={{ backgroundColor: "var(--color-main-white)" }}
    >
      <MainImage
        header="Gender In Culture"
        src="https://images.unsplash.com/photo-1519802772250-a52a9af0eacb?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <Center pos="relative" px={paddingResponsive} py="5rem" w="100%">
        <Group w="100%" justify="center">
          <HoverCard
            src="public/culture/karl_marx.jpg"
            header="Karl Marx"
            content="“Religion is the sigh of the oppressed creature, the heart of a heartless world, and the soul of soulless conditions. It is the opium of the people.”"
          />
          <HoverCard
            src="public/culture/mahler.png"
            header="Gustav Mahler"
            content="“Tradition is not the worship of ashes, but the preservation of fire.”"
          />
        </Group>
      </Center>
    </Paper>
  );
}

export default Culture;
