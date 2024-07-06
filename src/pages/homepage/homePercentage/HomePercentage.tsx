import {
  Center,
  Stack,
  Text,
  Image,
  Box,
  AspectRatio,
  Paper,
} from "@mantine/core";
import "./HomePercentage.css";
import { useViewportSize } from "@mantine/hooks";

function HomePercentage() {
  const { width } = useViewportSize();

  return (
    <Paper
      component="section"
      py="3rem"
      radius={0}
      id="home-percentage"
      pos="relative"
    >
      <Stack gap={0}>
        <Center className="home-percentage__content__wrapper" mb="-7rem">
          <Text className="home-percentage__content" size="md">
            Is the gender pay gap or {width <= 780 && <Box component="br" />}{" "}
            annual average salary of $15,457
          </Text>
        </Center>
        <Center>
          <Text className="home-percentage__value">16.2%</Text>
        </Center>
      </Stack>
      <AspectRatio
        w="content"
        ratio={1476 / 1792}
        pos="absolute"
        className="home-percentage__picture"
      >
        <Image
          src="https://raw.githubusercontent.com/ajcent/gensoc/main/public/homepage/paygap.png"
          display="inline-block"
          h="100%"
        />
      </AspectRatio>
    </Paper>
  );
}

export default HomePercentage;
