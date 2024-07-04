import getPaddingResponsive from "../../utils/getPaddingResponsive";
import "./MainImage.css";
import { BackgroundImage, Center, Text } from "@mantine/core";

interface MainImageProps {
  src: string;
  header: string;
}

function MainImage(props: MainImageProps) {
  const { src, header } = props;
  const paddingResponsive = getPaddingResponsive();

  return (
    <BackgroundImage h="90vh" src={src}>
      <Center
        className="main-image__wrapper"
        px={paddingResponsive}
        h="100%"
        w="100%"
      >
        <Text
          className="main-image__content"
          fw={600}
          tt="uppercase"
          ta="center"
        >
          {header}
        </Text>
      </Center>
    </BackgroundImage>
  );
}

export default MainImage;
