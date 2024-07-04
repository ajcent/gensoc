import { Stack, ThemeIcon, Text, Flex } from "@mantine/core";

interface IconMessageProps {
  icon: React.ReactNode;
  subheading: string;
  content: string;
}

function IconMessage(props: IconMessageProps) {
  const { icon, subheading, content } = props;

  return (
    <Flex gap="md">
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
    </Flex>
  );
}

export default IconMessage;
