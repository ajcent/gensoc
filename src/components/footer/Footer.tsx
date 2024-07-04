import "./Footer.css";

import { Center, Stack, Text } from "@mantine/core";
import BrandName from "../brandname/BrandName";
import getPaddingResponsive from "../../utils/getPaddingResponsive";

function Footer() {
  const paddingResponsive = getPaddingResponsive();

  return (
    <Stack
      id="footer"
      component="section"
      px={paddingResponsive}
      py="xl"
      gap="sm"
    >
      <Center>
        <BrandName size="xl" />
      </Center>

      <Center>
        <Text ta="center" size="sm">
          Supporting gender equality helps create a fair and inclusive society
          where everyone has the same opportunities and rights.
        </Text>
      </Center>

      <Center pt="xl">
        <Text ta="center" size="sm">
          Designed and Created By{" "}
          <Text component="span" inherit c="blue">
            BSCS 3A
          </Text>
        </Text>
      </Center>
    </Stack>
  );
}

export default Footer;
