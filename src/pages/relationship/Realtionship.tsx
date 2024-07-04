import "./relationship.css";

import { Paper, Box, Stack, Center, Text } from "@mantine/core";
import MainImage from "../../components/mainImage/MainImage";

import { FaBalanceScale } from "react-icons/fa";
import getPaddingResponsive from "../../utils/getPaddingResponsive";
import IconMessage from "../../components/iconMessage/IconMessage";

function Relationship() {
  const paddingResponsive = getPaddingResponsive();

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

      <Stack px={paddingResponsive} py="4rem">
        <Center>
          <Text className="main-text-size" fw={500} pb="xs" tt="uppercase">
            What It Really Is
          </Text>
        </Center>
        <Box component="div" className="relationship-needs">
          <IconMessage
            subheading="Role in Family"
            content="Men are expected to provide, and protect the family, while women are relegated to be the “light of the home” or caretakers of the family."
            icon={<FaBalanceScale size={30} />}
          />
          <IconMessage
            subheading="Same-sex Couples"
            content="Roles can be more flexibly worked out through discussion, but unique challenges, like societal discrimination, might come up."
            icon={<FaBalanceScale size={30} />}
          />
          <IconMessage
            subheading="Gender Roles and Expectations Setback"
            content="Society often pressures men to be stoic and women to balance their careers and family responsibilities."
            icon={<FaBalanceScale size={30} />}
          />
          <IconMessage
            subheading="Proper Communication"
            content="This help couples understand each other better, build trust, and solve problems together effectively. Support can help reduce these pressures."
            icon={<FaBalanceScale size={30} />}
          />
        </Box>
      </Stack>
    </Paper>
  );
}

export default Relationship;
