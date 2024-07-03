import { Stack, ThemeIcon, Text } from "@mantine/core";
import { FaBalanceScale } from "react-icons/fa";

interface IconMessageProps {
  icon: React.ReactNode;
  subheading: string;
  content: string;
}

function IconMessage(props: IconMessageProps) {
  const { icon, subheading, content } = props;

  return (
    <Stack>
      <ThemeIcon size="xl" color="yellow">
        {icon}
      </ThemeIcon>
      <Stack gap="4px">
        <Text c="black" fw={700}>
          {subheading}
        </Text>
        <Text c="black" size="sm">
          {content}
        </Text>
      </Stack>
    </Stack>
  );
}

export default IconMessage;
