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

function Education() {
  const paddingResponsive = getPaddingResponsive();

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

      <Stack px={paddingResponsive} py="4rem">
        <Center>
          <Text className="main-text-size" fw={500} pb="xs" tt="uppercase">
            What It Really Is
          </Text>
        </Center>
        <Box component="div" className="education-needs">
          <IconMessage
            subheading="Unequal Opportunity"
            content="Inclusion of gender perspectives in curriculum and teaching methods."
            icon={<FaBalanceScale size={30} />}
          />
          <IconMessage
            subheading="Policies and Practices"
            content="Promote gender equality, address stereotypes, and ensure all students have a fair chance to thrive academically and socially."
            icon={<FaBalanceScale size={30} />}
          />
          <IconMessage
            subheading="Gender-Inclusive Approach"
            content="Fosters a more equitable society by empowering individuals to break barriers and contribute fully to their communities."
            icon={<FaBalanceScale size={30} />}
          />
        </Box>
      </Stack>

      <Box className="education-banner" py="5rem">
        <Group grow px={paddingResponsive} gap="xl">
          <Box className="education-banner-image" w="50%">
            <AspectRatio ratio={16 / 9} w="100%">
              <Image src="https://github.com/ajcent/gensoc/blob/main/public/education/education_equality.jpg?raw=true" />
            </AspectRatio>
          </Box>
          <Center>
            <Text ta="center">
              Gender disparity in education persists due to various factors such
              as societal norms, and discrimination based on gender identity and
              sexual orientation.
            </Text>
          </Center>
        </Group>
      </Box>

      <Stack
        py="5rem"
        px={paddingResponsive}
        style={{ overflow: "hidden", position: "relative" }}
        gap="xl"
        opacity={0.7}
      >
        <Center>
          <Text ta="center">
            LGBTQ+ students frequently hearing homophobic comments from staff
            and negative remarks about gender expression.
          </Text>
        </Center>
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
      </Stack>
    </Paper>
  );
}

export default Education;
