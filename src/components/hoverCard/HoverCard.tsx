import "./HoverCard.css";
import { AspectRatio, BackgroundImage, Box, Text } from "@mantine/core";
import { IoMdArrowRoundUp } from "react-icons/io";

interface HoverCardProps {
  src: string;
  header: string;
  content: string;
}

function HoverCard(props: HoverCardProps) {
  const { src, header, content } = props;

  return (
    <AspectRatio className="hovercard" ratio={16 / 9}>
      <BackgroundImage src={src}>
        <Box component="div" className="hovercard-icon">
          <IoMdArrowRoundUp
            size={22}
            color="white"
            className="hovercard-icon__icon"
          />
        </Box>

        <Box className="hovercard-content" p="md">
          <Text fw={700} size="lg" className="main-text">
            {header}
          </Text>
          <Text size="md" className="sub-text">
            {content}
          </Text>
        </Box>
      </BackgroundImage>
    </AspectRatio>
  );
}

export default HoverCard;
