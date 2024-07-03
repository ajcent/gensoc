import "./TextOnImage.css";

import { BackgroundImage, Box, Stack, Text } from "@mantine/core";

interface TextOnImageProps {
  content: string;
  src: string;
}

function TextOnImage(props: TextOnImageProps) {
  const { content, src } = props;
  const imageResponsive = { base: 200, xs: 300, sm: 400 };

  return (
    <BackgroundImage h={imageResponsive} className="text-on-image" src={src}>
      <Box className="text-on-image__container">
        <Stack h="100%" justify="flex-end" p="md">
          <Text className="main-text">{content}</Text>
        </Stack>
      </Box>
    </BackgroundImage>
  );
}

export default TextOnImage;
