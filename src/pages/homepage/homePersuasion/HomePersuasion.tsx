import { Box, Group, Paper, Image } from "@mantine/core";
import "./HomePersuasion.css";
import getPaddingResponsive from "../../../utils/getPaddingResponsive";

function HomePersuasion() {
  const paddingResponsive = getPaddingResponsive();

  return (
    <Paper id="home-persuasion" component="section" radius={0}>
      <Group px={paddingResponsive}>
        <Box component="div" className="persuation-grid">
          <Box className="persuation-item item-1">
            <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png" />
          </Box>
          <Box className="persuation-item item-2">
            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
              h="100%"
            />
          </Box>
          <Box className="persuation-item item-3">
            <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png" />
          </Box>
          <Box className="persuation-item item-4">
            <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png" />
          </Box>
          <Box className="persuation-item item-5">
            <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png" />
          </Box>
        </Box>
      </Group>
    </Paper>
  );
}

export default HomePersuasion;
