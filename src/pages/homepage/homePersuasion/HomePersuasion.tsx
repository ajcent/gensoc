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
                  src="https://github.com/ajcent/gensoc/blob/main/public/homepage/Organizations/Gabriela/Grabiela.jpg?raw=true"
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
                  src="https://raw.githubusercontent.com/ajcent/gensoc/main/public/homepage/Organizations/Gabriela/Gabriela_Overlay.webp"
                />
              </Box>
            </Box>

            <Box pos="relative" className="persuation-item">
              <AspectRatio ratio={16 / 9}>
                <Image src="https://github.com/ajcent/gensoc/blob/main/public/homepage/Organizations/GirlUp/girlup.png?raw=true" />
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
                src="https://github.com/ajcent/gensoc/blob/main/public/homepage/Organizations/middle.jpg?raw=true"
              />
            </Box>
          </Stack>

          <Stack className="persuation-grid__item__stack">
            <Box pos="relative" className="persuation-item">
              <AspectRatio ratio={16 / 9}>
                <Image src="https://raw.githubusercontent.com/ajcent/gensoc/main/public/homepage/Organizations/HRW/hrw.webp" />
              </AspectRatio>
              <Box
                component="div"
                className="persuation-item__overlay"
                pos="absolute"
              >
                <Image
                  display="inline-block"
                  height="60%"
                  src="https://github.com/ajcent/gensoc/blob/main/public/homepage/Organizations/HRW/hrw_overlay.jpg?raw=true"
                />
              </Box>
            </Box>

            <Box pos="relative" className="persuation-item">
              <AspectRatio ratio={16 / 9}>
                <Image src="https://github.com/ajcent/gensoc/blob/main/public/homepage/Organizations/Akbayan/Akbayan%20(2).jpg?raw=true" />
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
