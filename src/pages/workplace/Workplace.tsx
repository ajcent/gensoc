import "./Workplace.css";
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
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useViewportSize } from "@mantine/hooks";
import { FaBalanceScale } from "react-icons/fa";
import IconMessage from "../../components/iconMessage/IconMessage";

function Workplace() {
  const paddingResponsive = getPaddingResponsive();
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  const { width } = useViewportSize();

  return (
    <Paper
      radius={0}
      component="div"
      style={{ backgroundColor: "var(--color-main-white)" }}
    >
      <MainImage
        header="Gender In Workplace"
        src="https://www.thecultureconcept.com/wp-content/uploads/2017/02/Hidden-Figures-8.jpg"
      />

      <Center pos="relative" px={paddingResponsive} py="5rem" w="100%">
        <Group w="100%" justify="center">
          <HoverCard
            src="https://images.newscientist.com/wp-content/uploads/2021/07/16120548/mae_jemison2exd3p7.jpg"
            header="Mae Jemison"
            content="“LOVE has no gender, no religion, neither does it come with any conditions. In this world full of conditions, try to LOVE someone.”"
          />
          <HoverCard
            src="https://i0.wp.com/www.rocketstem.org/wp-content/uploads/2018/10/lrc-2016-h1_p_katherine_g._johnson-050507.jpg?ssl=1"
            header="Katherine Johnson"
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
                  Diversity in Leadership
                </Text>
                <Center>
                  <Text ta="center">
                    When leadership doesn't reflect workforce diversity, it can
                    perpetuate existing power imbalances.
                  </Text>
                </Center>
              </Stack>
            </Center>
          </Carousel.Slide>

          <Carousel.Slide c="white">
            <Center h="100%">
              <Stack gap="4px" px={{ md: "5rem", base: "3rem" }}>
                <Text size="xl" fw={500} ta="center">
                  Inadequate Policies and Enforcement
                </Text>
                <Center>
                  <Text ta="center">
                    Some workplaces often lack robust anti-discrimination
                    policies or fail to enforce them effectively.
                  </Text>
                </Center>
              </Stack>
            </Center>
          </Carousel.Slide>

          <Carousel.Slide c="white">
            <Center h="100%">
              <Stack gap="4px" px={{ md: "5rem", base: "3rem" }}>
                <Text size="xl" fw={500} ta="center">
                  Gender Stereotypes
                </Text>
                <Center>
                  <Text ta="center">
                    Persistent stereotypes about gender roles or racial
                    characteristics influences perception to other genders that
                    reduces work opportunities.
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
        gap="2.5rem"
      >
        <Stack>
          <Group grow gap="xl">
            <Box className="education-banner-image" w="50%">
              <AspectRatio ratio={16 / 9} w="100%">
                <Image src="https://img.freepik.com/premium-photo/wooden-figures-man-women-scales-concept-gender-pay-gap-income-inequality_1048944-26952993.jpg?w=996" />
              </AspectRatio>
            </Box>
            {width > 700 && (
              <Center>
                <Text ta="center">
                  Women often earn less than men for equivalent work, primarily
                  due to discrimination and job segregation practices in various
                  industries. This highlights persistent challenges in achieving
                  workplace pay equity and gender equality.
                </Text>
              </Center>
            )}
          </Group>
          {width <= 700 && (
            <Center>
              <Text ta="center">
                Women often earn less than men for equivalent work, primarily
                due to discrimination and job segregation practices in various
                industries. This highlights persistent challenges in achieving
                workplace pay equity and gender equality.
              </Text>
            </Center>
          )}
        </Stack>

        <Stack>
          <Group grow gap="xl">
            {width > 700 && (
              <Center>
                <Text ta="center">
                  "Hidden Figures" is a biographical drama that emphasizes the
                  significant roles of three African American women
                  mathematicians during the 1960s Space Race. The drama
                  highlights their important contributions to NASA's history.
                </Text>
              </Center>
            )}
            <Box className="education-banner-image" w="50%">
              <AspectRatio ratio={16 / 9} w="100%">
                <Image src="https://th.bing.com/th/id/R.d881045c0d7c22c858ed004db8c16f5e?rik=XkdXvyz3MRdQtQ&riu=http%3a%2f%2fwww.blackfilm.com%2fread%2fwp-content%2fuploads%2f2016%2f12%2fHidden-Figures-15.jpg&ehk=J9puRXvgxUTOnFxEOj14wASGOprEU9qB7hJhdDU0XtQ%3d&risl=&pid=ImgRaw&r=0" />
              </AspectRatio>
            </Box>
          </Group>
          {width <= 700 && (
            <Center>
              <Text ta="center">
                "Hidden Figures" is a biographical drama that emphasizes the
                significant roles of three African American women mathematicians
                during the 1960s Space Race. The drama highlights their
                important contributions to NASA's history.
              </Text>
            </Center>
          )}
        </Stack>
      </Stack>

      <Stack px={paddingResponsive} py="4rem">
        <Center>
          <Text className="main-text-size" fw={500} pb="xs" tt="uppercase">
            Make A Change
          </Text>
        </Center>
        <Box component="div" className="relationship-needs">
          <IconMessage
            subheading="Blind Hiring"
            content="Consider anonymizing resumes during the initial screening process to focus on qualifications, not gender."
            icon={<FaBalanceScale size={30} />}
          />
          <IconMessage
            subheading="Neutral Job Descriptions"
            content="Avoid using gendered language in job descriptions. Focus on the skills and experience needed."
            icon={<FaBalanceScale size={30} />}
          />
          <IconMessage
            subheading="Flexible Work Arrangements"
            content="Offer flexible work arrangements like remote work or part-time schedules to benefit both working parents and those with other caregiving responsibilities."
            icon={<FaBalanceScale size={30} />}
          />
          <IconMessage
            subheading="Unconscious Bias Training"
            content="Unconscious bias training can help managers and employees recognize and challenge their own biases, leading to fairer hiring and promotion practices."
            icon={<FaBalanceScale size={30} />}
          />
          <IconMessage
            subheading="Mentorship Programs"
            content="Mentorship programs can connect women with experienced professionals, offering guidance and support for career advancement."
            icon={<FaBalanceScale size={30} />}
          />
          <IconMessage
            subheading="Diversity in Management"
            content="Initiatives that support the advancement of women and other underrepresented genders into managerial and executive positions."
            icon={<FaBalanceScale size={30} />}
          />
        </Box>
      </Stack>
    </Paper>
  );
}

export default Workplace;
