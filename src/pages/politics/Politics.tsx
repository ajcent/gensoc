import "./Politics.css";

import {
  Paper,
  Box,
  Stack,
  Text,
  Center,
  Group,
  AspectRatio,
  Image,
} from "@mantine/core";
import MainImage from "../../components/mainImage/MainImage";

import { FaBalanceScale } from "react-icons/fa";
import getPaddingResponsive from "../../utils/getPaddingResponsive";
import IconMessage from "../../components/iconMessage/IconMessage";
import HoverCard from "../../components/hoverCard/HoverCard";
import { useViewportSize } from "@mantine/hooks";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

function Politics() {
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
        header="Gender In Politics"
        content="Roles and representation of different genders in political processes, decision-making, and leadership positions."
        src="https://images.unsplash.com/photo-1633643333515-ef3727546bd4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <Center pos="relative" px={paddingResponsive} py="5rem" w="100%">
        <Group w="100%" justify="center">
          <HoverCard
            src="https://th.bing.com/th/id/OIP.EF0Azipwg8QfEjt8eamRlwHaEK?rs=1&pid=ImgDetMain"
            header="Michelle Bachelet"
            content="“For me, a better democracy is a democracy where women do not only have the right to vote and to elect but to be elected.”"
          />
          <HoverCard
            src="https://th.bing.com/th/id/R.1a652ff9a07e8597d5e552968463bd60?rik=VSgWwh5HMrMcvQ&riu=http%3a%2f%2fkitschmix.com%2fwp-content%2fuploads%2f2015%2f11%2fBarbara-Gittings-activist.jpg&ehk=5xB%2fexl8euP6uh41J9rAfVJXKUMZOA1ECpU4yPRMKDQ%3d&risl=&pid=ImgRaw&r=0"
            header="Barbara Gittings"
            content="“Equality means more than passing laws. The struggle is really won in the hearts and minds of the community, where it really counts.”"
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
                  Norms and Stereotypes
                </Text>
                <Center>
                  <Text ta="center">
                    Traditional gender roles often discourage women and
                    non-binary individuals from pursuing political careers,
                    reinforcing the idea that politics is a male domain.
                  </Text>
                </Center>
              </Stack>
            </Center>
          </Carousel.Slide>

          <Carousel.Slide c="white">
            <Center h="100%">
              <Stack gap="4px" px={{ md: "5rem", base: "3rem" }}>
                <Text size="xl" fw={500} ta="center">
                  Harassment
                </Text>
                <Center>
                  <Text ta="center">
                    Women and gender minorities frequently face discrimination
                    in political environments, deterring them from participating
                    fully.
                  </Text>
                </Center>
              </Stack>
            </Center>
          </Carousel.Slide>

          <Carousel.Slide c="white">
            <Center h="100%">
              <Stack gap="4px" px={{ md: "5rem", base: "3rem" }}>
                <Text size="xl" fw={500} ta="center">
                  Structural Barriers
                </Text>
                <Center>
                  <Text ta="center">
                    Lack of access to education, mentorship, and resources can
                    impede the political aspirations of marginalized genders.
                  </Text>
                </Center>
              </Stack>
            </Center>
          </Carousel.Slide>

          <Carousel.Slide c="white">
            <Center h="100%">
              <Stack gap="4px" px={{ md: "5rem", base: "3rem" }}>
                <Text size="xl" fw={500} ta="center">
                  Media Representation
                </Text>
                <Center>
                  <Text ta="center">
                    Media often portrays political leaders in a gender-biased
                    manner, influencing public perception and discouraging
                    diverse participation.
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
              <Image src="https://github.com/ajcent/gensoc/blob/main/public/politics/why.jpg?raw=true" />
            </AspectRatio>
          </Box>
          {width > 700 && (
            <Center>
              <Text ta="center">
                The political sphere has long been dominated by men, leading to
                policies and governance that often neglect the needs and rights
                of other genders. This imbalance perpetuates inequality and
                hinders progress. The importance of advocacy for gender equality
                arises in politics in hopes of ensuring diverse perspectives in
                decision-making.
              </Text>
            </Center>
          )}
        </Group>
        {width <= 700 && (
          <Center>
            <Text ta="center">
              The political sphere has long been dominated by men, leading to
              policies and governance that often neglect the needs and rights of
              other genders. This imbalance perpetuates inequality and hinders
              progress. The importance of advocacy for gender equality arises in
              politics in hopes of ensuring diverse perspectives in
              decision-making.
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
        <Box component="div" className="politics-needs">
          <IconMessage
            subheading="Challenge the Bias"
            content="Educate the public and media to break stereotypes that discourage women in politics."
            icon={<FaBalanceScale size={30} />}
          />
          <IconMessage
            subheading="Policies and Practices"
            content="Promote gender equality, address stereotypes, and ensure all students have a fair chance to thrive academically and socially."
            icon={<FaBalanceScale size={30} />}
          />
          <IconMessage
            subheading="Change the Campaign Culture"
            content="Focus on policies and respectful debate to make politics more attractive to women."
            icon={<FaBalanceScale size={30} />}
          />
          <IconMessage
            subheading="Redefine Leadership"
            content="Challenge traditional views of masculinity and promote women's leadership and intellectual qualities."
            icon={<FaBalanceScale size={30} />}
          />
        </Box>
      </Stack>
    </Paper>
  );
}

export default Politics;
