import "./Education.css";

import { Box, Center, Group, Paper, Stack, Text } from "@mantine/core";
import MainImage from "../../components/mainImage/MainImage";
import IconMessage from "../../components/iconMessage/IconMessage";
import { FaBalanceScale } from "react-icons/fa";
import HoverCard from "../../components/hoverCard/HoverCard";
import getPaddingResponsive from "../../utils/getPaddingResponsive";

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

      <Stack px={paddingResponsive} py="4rem">
        <Center>
          <Text className="main-text-size" fw={500} pb="xl" tt="uppercase">
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

      <Center pos="relative" px={paddingResponsive} pb="5rem" w="100%">
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

      <Group grow px={paddingResponsive}>
        <Text>Lol</Text>
        <Text>Lol</Text>
      </Group>
    </Paper>
  );
}

export default Education;
