import "./Politics.css";

import { Paper, Box } from "@mantine/core";
import MainImage from "../../components/mainImage/MainImage";

import { FaBalanceScale } from "react-icons/fa";
import getPaddingResponsive from "../../utils/getPaddingResponsive";
import IconMessage from "../../components/iconMessage/IconMessage";

function Politics() {
  const paddingResponsive = getPaddingResponsive();

  return (
    <Paper
      radius={0}
      component="div"
      style={{ backgroundColor: "var(--color-main-white)" }}
    >
      <MainImage
        header="Gender In Politics"
        src="https://images.unsplash.com/photo-1633643333515-ef3727546bd4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <Box
        component="div"
        px={paddingResponsive}
        py="xl"
        className="politics-needs"
      >
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
    </Paper>
  );
}

export default Politics;
