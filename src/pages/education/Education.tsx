import "./Education.css";

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
import IconMessage from "../../components/iconMessage/IconMessage";
import { FaBalanceScale } from "react-icons/fa";
import HoverCard from "../../components/hoverCard/HoverCard";
import getPaddingResponsive from "../../utils/getPaddingResponsive";
import { BarChart } from "@mantine/charts";
import { useViewportSize } from "@mantine/hooks";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

function Education() {
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
        header="Gender In Education"
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <Center pos="relative" px={paddingResponsive} pt="5rem" w="100%">
        <Group w="100%" justify="center">
          <HoverCard
            src="https://th.bing.com/th/id/OIP.3Jq-GDG5pNl-MTl3QhieNwHaE7?rs=1&pid=ImgDetMain"
            header="Oprah Winfrey"
            content="“Education is the key to unlocking the world, a passport to freedom.”"
          />
          <HoverCard
            src="https://th.bing.com/th/id/OIP.3Jq-GDG5pNl-MTl3QhieNwHaE7?rs=1&pid=ImgDetMain"
            header="Pia Cayetano"
            content="“Gender equality in education is not just about fairness, it is about empowering half of our population to contribute fully to society.”"
          />
        </Group>
      </Center>

      <Stack
        py="5rem"
        px={paddingResponsive}
        style={{ overflow: "hidden", position: "relative" }}
        gap="xl"
        opacity={0.7}
      >
        <BarChart
          w="content"
          h={300}
          tooltipAnimationDuration={200}
          data={[
            { comment: "Gay", Count: 98 },
            {
              comment: "Homo",
              Count: 99,
            },
            { comment: "Remarks", Count: 95 },
            { comment: "Gender Expression", Count: 94 },
            { comment: "Trans", Count: 92 },
          ]}
          dataKey="comment"
          series={[{ name: "Count", color: "violet.6" }]}
          tickLine="y"
        />

        <Center>
          <Text ta="center">
            LGBTQ+ students frequently hearing homophobic comments from staff
            and negative remarks about gender expression.
          </Text>
        </Center>
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
              <Image src="https://github.com/ajcent/gensoc/blob/main/public/education/education_equality.jpg?raw=true" />
            </AspectRatio>
          </Box>
          {width > 700 && (
            <Center>
              <Text ta="center">
                Gender disparity in education persists due to various factors
                such as societal norms, and discrimination based on gender
                identity and sexual orientation.
              </Text>
            </Center>
          )}
        </Group>
        {width <= 700 && (
          <Center>
            <Text ta="center">
              Gender disparity in education persists due to various factors such
              as societal norms, and discrimination based on gender identity and
              sexual orientation.
            </Text>
          </Center>
        )}
      </Stack>

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
                  Historical Legacies
                </Text>
                <Center>
                  <Text>
                    Long-standing societal biases and inequalities continue to
                    influence current attitudes and structures.
                  </Text>
                </Center>
              </Stack>
            </Center>
          </Carousel.Slide>

          <Carousel.Slide c="white">
            <Center h="100%">
              <Stack gap="4px" px={{ md: "5rem", base: "3rem" }}>
                <Text size="xl" fw={500} ta="center">
                  Historical Legacies
                </Text>
                <Center>
                  <Text>
                    Long-standing societal biases and inequalities continue to
                    influence current attitudes and structures.
                  </Text>
                </Center>
              </Stack>
            </Center>
          </Carousel.Slide>

          <Carousel.Slide c="white">
            <Center h="100%">
              <Stack gap="4px" px={{ md: "5rem", base: "3rem" }}>
                <Text size="xl" fw={500} ta="center">
                  Historical Legacies
                </Text>
                <Center>
                  <Text>
                    Long-standing societal biases and inequalities continue to
                    influence current attitudes and structures.
                  </Text>
                </Center>
              </Stack>
            </Center>
          </Carousel.Slide>
        </Carousel>
      </Stack>

      <Stack px={paddingResponsive} py="4rem">
        <Center>
          <Text className="main-text-size" fw={500} pb="xs" tt="uppercase">
            Make A Change
          </Text>
        </Center>
        <Box component="div" className="education-needs">
          <IconMessage
            subheading="Lead by Example"
            content="Challenge gender stereotypes and support gender equality in your everyday life. Encourage others to do the same."
            icon={<FaBalanceScale size={30} />}
          />
          <IconMessage
            subheading="Raise Awareness"
            content="Use social media, blogs, and public speaking to highlight the importance of gender equality and access to education."
            icon={<FaBalanceScale size={30} />}
          />
          <IconMessage
            subheading="Support Legislation"
            content="Advocate for laws and policies that promote gender equality in education. Write letters, sign petitions, and participate in rallies to support these causes."
            icon={<FaBalanceScale size={30} />}
          />
          <IconMessage
            subheading="Community Workshops"
            content="Organize workshops that educate communities about the importance of gender equality in education and provide practical steps to support it."
            icon={<FaBalanceScale size={30} />}
          />
        </Box>
      </Stack>
    </Paper>
  );
}

export default Education;
