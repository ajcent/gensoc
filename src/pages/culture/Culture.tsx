import "./Culture.css";

import {
  AspectRatio,
  Box,
  Center,
  Group,
  Paper,
  Stack,
  Text,
  Image,
} from "@mantine/core";
import MainImage from "../../components/mainImage/MainImage";
import HoverCard from "../../components/hoverCard/HoverCard";
import getPaddingResponsive from "../../utils/getPaddingResponsive";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { useViewportSize } from "@mantine/hooks";
import IconMessage from "../../components/iconMessage/IconMessage";
import { FaBalanceScale } from "react-icons/fa";

function Culture() {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  const paddingResponsive = getPaddingResponsive();
  const { width } = useViewportSize();

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
            src="https://github.com/ajcent/gensoc/blob/main/public/culture/karl_marx.jpg?raw=true"
            header="Karl Marx"
            content="“Religion is the sigh of the oppressed creature, the heart of a heartless world, and the soul of soulless conditions. It is the opium of the people.”"
          />
          <HoverCard
            src="https://github.com/ajcent/gensoc/blob/main/public/culture/mahler.png?raw=true"
            header="Gustav Mahler"
            content="“Tradition is not the worship of ashes, but the preservation of fire.”"
          />
        </Group>
      </Center>

      <Stack className="education-carousel">
        <Carousel
          withControls={false}
          draggable={false}
          withIndicators
          height="15rem"
          w="100%"
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          loop
          className="no-select"
        >
          <Carousel.Slide c="white">
            <Center h="100%">
              <Stack gap="4px" px={{ md: "5rem", base: "3rem" }}>
                <Text size="xl" fw={500} ta="center">
                  Societal Expectations
                </Text>
                <Center>
                  <Text ta="center">
                    Cultural norms often expect women to handle household duties
                    while men pursue careers, leading to unequal opportunities.
                  </Text>
                </Center>
              </Stack>
            </Center>
          </Carousel.Slide>

          <Carousel.Slide c="white">
            <Center h="100%">
              <Stack gap="4px" px={{ md: "5rem", base: "3rem" }}>
                <Text size="xl" fw={500} ta="center">
                  Impact of Media
                </Text>
                <Center>
                  <Text ta="center">
                    Media can reinforce gender stereotypes. Positive
                    representation of women can help challenge these roles and
                    promote equality.
                  </Text>
                </Center>
              </Stack>
            </Center>
          </Carousel.Slide>

          <Carousel.Slide c="white">
            <Center h="100%">
              <Stack gap="4px" px={{ md: "5rem", base: "3rem" }}>
                <Text size="xl" fw={500} ta="center">
                  Diverse Gender Representation
                </Text>
                <Center>
                  <Text ta="center">
                    Media representation of non-binary and transgender people
                    can help normalize diverse identities and challenge norms.
                  </Text>
                </Center>
              </Stack>
            </Center>
          </Carousel.Slide>
        </Carousel>
      </Stack>

      <Stack
        className="education-banner"
        px={paddingResponsive}
        py="5rem"
        gap="xl"
      >
        <Group grow gap="xl">
          <Box className="education-banner-image" w="50%">
            <AspectRatio ratio={16 / 9} w="100%">
              <Image src="https://images.unsplash.com/photo-1605816789011-ec492509c31d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </AspectRatio>
          </Box>
          {width > 700 && (
            <Center>
              <Text ta="center">
                LGBTQ Pride Month in June commemorates the struggle for civil
                rights and celebrates community accomplishments. Originating in
                1924 with Henry Gerber's Society for Human Rights, the movement
                gained momentum following the 1969 raid on the Stonewall Inn in
                NYC.
              </Text>
            </Center>
          )}
        </Group>
        {width <= 700 && (
          <Center>
            <Text ta="center">
              A woman in a heterosexual relationship takes on most household
              chores despite working full-time due to societal norms, leading to
              resentment and stress in the relationship.
            </Text>
          </Center>
        )}
      </Stack>

      <Stack px={paddingResponsive} py="4rem">
        <Center>
          <Text className="main-text-size" fw={500} pb="xs" tt="uppercase">
            Make A Change
          </Text>
        </Center>
        <Box component="div" className="relationship-needs">
          <IconMessage
            subheading="Community Programs"
            content="Support community-based programs that encourage discussions about gender norms and provide support for those affected by gender discrimination."
            icon={<FaBalanceScale size={30} />}
          />
          <IconMessage
            subheading="Public Campaigns"
            content="Launch public awareness campaigns that challenge gender stereotypes and promote equality."
            icon={<FaBalanceScale size={30} />}
          />
          <IconMessage
            subheading="Encourage Self-Expression"
            content="Express freely without fear of judgment based on gender norms. Support initiatives that celebrate diverse fashion, hobbies, and personal interests."
            icon={<FaBalanceScale size={30} />}
          />
          <IconMessage
            subheading="Unbiased Representation"
            content="Diverse and positive representations of all genders in media to challenge and change societal perceptions."
            icon={<FaBalanceScale size={30} />}
          />
        </Box>
      </Stack>
    </Paper>
  );
}

export default Culture;
