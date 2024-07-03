import {
  BackgroundImage,
  Box,
  Button,
  Group,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import "./HomeDonation.css";

import UnwomenLogo from "../../../components/unwomenLogo/UnwomenLogo";
import getPaddingResponsive from "../../../utils/getPaddingResponsive";
import { IoSend } from "react-icons/io5";

function HomeDonation() {
  const paddingResponsive = getPaddingResponsive();

  return (
    <Paper component="section" id="home-donation">
      <Box h={370} pos="relative">
        <BackgroundImage className="home-donation__image" h="100%" src="">
          <Stack p="md" h="100%" justify="space-between">
            <Group justify="flex-end">
              <UnwomenLogo />
            </Group>
            <Stack
              px={paddingResponsive}
              gap="md"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Text
                className="main-text"
                tt="uppercase"
                size="2.65rem"
                fw={600}
              >
                Support For Who Fight
              </Text>
              <Text>
                <Button
                  variant="filled"
                  size="lg"
                  color="blue"
                  miw="fit-content"
                >
                  <Button rightSection={<IoSend size={16} />}>
                    <Text tt="uppercase" fw={700}>
                      Donate
                    </Text>
                  </Button>
                </Button>
              </Text>
            </Stack>
          </Stack>
        </BackgroundImage>
      </Box>
    </Paper>
  );
}

export default HomeDonation;
