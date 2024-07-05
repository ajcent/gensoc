import "./relationship.css";

import {
  Paper,
  Box,
  Stack,
  Center,
  Text,
  Group,
  AspectRatio,
  Image,
} from "@mantine/core";
import MainImage from "../../components/mainImage/MainImage";

import { FaBalanceScale } from "react-icons/fa";
import getPaddingResponsive from "../../utils/getPaddingResponsive";
import IconMessage from "../../components/iconMessage/IconMessage";
import HoverCard from "../../components/hoverCard/HoverCard";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useViewportSize } from "@mantine/hooks";

function Relationship() {
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
        header="Gender In Relationship"
        src="https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <Center pos="relative" px={paddingResponsive} py="5rem" w="100%">
        <Group w="100%" justify="center">
          <HoverCard
            src="https://th.bing.com/th/id/R.59a790110e2c66c601c1257b4dd48fe0?rik=tLNw%2bWQ%2b7Jjv6A&riu=http%3a%2f%2fpopulationgrowth.org%2fwp-content%2fuploads%2f2022%2f12%2fRiane-Eisler-Purple-Portrait-1024x685.png&ehk=4ayUWPfbTPTO%2bVUGWmBxdYNgVa89SVu3zueOVhG8FUM%3d&risl=&pid=ImgRaw&r=0"
            header="Riane Eisler"
            content="“LOVE has no gender, no religion, neither does it come with any conditions. In this world full of conditions, try to LOVE someone.”"
          />
          <HoverCard
            src="public/relationship/akash.jpg"
            header="Akash Sarka"
            content="“Gender relationships, challenging for many, determine whether a society leans towards domination or partnership in all its relations.”"
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
                  Power Dynamics
                </Text>
                <Center>
                  <Text ta="center">
                    Men are expected to provide, and protect the family, while
                    women are relegated to be the “light of the home” or
                    caretakers of the family.
                  </Text>
                </Center>
              </Stack>
            </Center>
          </Carousel.Slide>

          <Carousel.Slide c="white">
            <Center h="100%">
              <Stack gap="4px" px={{ md: "5rem", base: "3rem" }}>
                <Text size="xl" fw={500} ta="center">
                  Expectations Setback
                </Text>
                <Center>
                  <Text ta="center">
                    Society often pressures men to be stoic and women to balance
                    their careers and family responsibilities.
                  </Text>
                </Center>
              </Stack>
            </Center>
          </Carousel.Slide>

          <Carousel.Slide c="white">
            <Center h="100%">
              <Stack gap="4px" px={{ md: "5rem", base: "3rem" }}>
                <Text size="xl" fw={500} ta="center">
                  Lack of Communication
                </Text>
                <Center>
                  <Text ta="center">
                    Weakens balanced relationships and prevents gender equality
                    because it stops partners from understanding and working
                    together. fully.
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
              <Image src="https://img.freepik.com/premium-photo/tired-mom-watches-video-tablet-ironing-things-her-son-with-smartphone-too_73664-1053.jpg?w=740" />
            </AspectRatio>
          </Box>
          {width > 700 && (
            <Center>
              <Text ta="center">
                A woman in a heterosexual relationship takes on most household
                chores despite working full-time due to societal norms, leading
                to resentment and stress in the relationship.
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
            subheading="Open-Mindedness"
            content="Encourage open expression of emotions without conforming to stereotypical expectations"
            icon={<FaBalanceScale size={30} />}
          />
          <IconMessage
            subheading="Shared Responsibilities"
            content="Split household tasks fairly based on interests and abilities, avoiding gendered expectations."
            icon={<FaBalanceScale size={30} />}
          />
          <IconMessage
            subheading="Respect Individuality"
            content="Value and celebrate each other's unique traits and strengths, without pressure to fit into gender stereotypes."
            icon={<FaBalanceScale size={30} />}
          />
          <IconMessage
            subheading="Open Communication"
            content="Understand each other better, build trust, and solve problems together effectively. Support can help reduce these pressures."
            icon={<FaBalanceScale size={30} />}
          />
        </Box>
      </Stack>
    </Paper>
  );
}

export default Relationship;
