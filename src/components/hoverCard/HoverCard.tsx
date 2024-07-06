import "./HoverCard.css";
import { AspectRatio, BackgroundImage, Box, Stack, Text } from "@mantine/core";
import { IoMdArrowRoundUp } from "react-icons/io";

interface HoverCardProps {
  src: string;
  header: string;
  content: string;
}

function HoverCard(props: HoverCardProps) {
  const { src, header, content } = props;

  return (
    <Stack className="hovercard__wrapper" gap={0}>
      <AspectRatio className="hovercard" ratio={16 / 9}>
        <BackgroundImage src={src}>
          <Box component="div" className="hovercard-icon">
            <IoMdArrowRoundUp
              size={22}
              color="white"
              className="hovercard-icon__icon"
            />
          </Box>

          <Box className="hovercard-content hovercard-content__desktop" p="md">
            <Text fw={700} size="lg" className="main-text">
              {header}
            </Text>
            <Text size="md" className="sub-text">
              {content}
            </Text>
          </Box>
        </BackgroundImage>
      </AspectRatio>
      <Box c="black" p="md" className="hovercard-content__mobile">
        <Text fw={700} size="lg">
          {header}
        </Text>
        <Text size="sm" opacity={0.8}>
          {content}
        </Text>
      </Box>
    </Stack>
  );
}

export default HoverCard;
