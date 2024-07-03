import "./MainImage.css";
import { BackgroundImage, Center, Text } from "@mantine/core";

interface MainImageProps {
  src: string;
  header: string;
}

function MainImage(props: MainImageProps) {
  const { src, header } = props;

  return (
    <BackgroundImage h="90vh" src={src}>
      <Center className="main-image__wrapper" h="100%" w="100%">
        <Text className="main-image__content" fw={600} tt="uppercase">
          {header}
        </Text>
      </Center>
    </BackgroundImage>
  );
}

export default MainImage;
