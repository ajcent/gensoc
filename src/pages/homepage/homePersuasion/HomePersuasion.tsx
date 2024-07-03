import {
  Box,
  Group,
  Paper,
  Image,
  Stack,
  AspectRatio,
  Text,
  Center,
} from "@mantine/core";
import "./HomePersuasion.css";
import AkbayanLogo from "./overlay/akbayanLogo/AkbayanLogo";

function HomePersuasion() {
  return (
    <Paper id="home-persuasion" component="section" radius={0} pos="relative">
      <Group>
        <Box component="div" className="persuation-grid">
          <Stack className="persuation-grid__item__stack">
            <Box pos="relative" className="persuation-item">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src="./public/homepage/Organizations/Gabriela/Grabiela.jpg"
                  h="100%"
                />
              </AspectRatio>
              <Box
                component="div"
                className="persuation-item__overlay"
                pos="absolute"
              >
                <Image
                  display="inline-block"
                  height="50%"
                  src="./public/homepage/Organizations/Gabriela/Gabriela_Overlay.webp"
                />
              </Box>
            </Box>

            <Box pos="relative" className="persuation-item">
              <AspectRatio ratio={16 / 9}>
                <Image src="./public/homepage/Organizations/Girlup/girlup.png" />
              </AspectRatio>
              <Box
                component="div"
                className="persuation-item__overlay"
                pos="absolute"
              ></Box>
            </Box>
          </Stack>

          <Stack>
            <Box className="persuation-item middle" h="100%">
              <Image
                h="100%"
                src="./public/homepage/Organizations/middle.jpg"
              />
            </Box>
          </Stack>

          <Stack className="persuation-grid__item__stack">
            <Box pos="relative" className="persuation-item">
              <AspectRatio ratio={16 / 9}>
                <Image src="./public/homepage/Organizations/HRW/hrw.webp" />
              </AspectRatio>
              <Box
                component="div"
                className="persuation-item__overlay"
                pos="absolute"
              >
                <Image
                  display="inline-block"
                  height="60%"
                  src="./public/homepage/Organizations/HRW/hrw_overlay.jpg"
                />
              </Box>
            </Box>

            <Box pos="relative" className="persuation-item">
              <AspectRatio ratio={16 / 9}>
                <Image src="./public/homepage/Organizations/Akbayan/Akbayan (2).jpg" />
              </AspectRatio>
              <Box
                component="div"
                className="persuation-item__overlay"
                pos="absolute"
              >
                <AkbayanLogo />
              </Box>
            </Box>
          </Stack>
        </Box>
      </Group>
      <Stack gap={0} pos="absolute" className="home-persuasion__main-text">
        <Text tt="uppercase" className="title" fw={700}>
          Join The Movement
        </Text>
        <Center>
          <Text className="content">
            Choose The Organization That Truly Acts
          </Text>
        </Center>
      </Stack>
    </Paper>
  );
}

export default HomePersuasion;
