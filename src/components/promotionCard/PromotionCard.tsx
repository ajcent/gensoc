import { Card, Flex, Text, Avatar, Stack } from "@mantine/core";
import "./PromotionCard.css";

interface PromotionCardProps {
  name: string;
  description: string;
  message: string;
  src?: string;
}

function PromotionCard(props: PromotionCardProps) {
  const { name, description, message, src } = props;

  return (
    <Card className="card">
      <Stack h="100%" justify="space-between">
        <Text className="text">{message}</Text>
        <Flex align="center" gap="xs">
          <Avatar variant="filled" radius="xl" size="lg" src={src} />
          <Stack gap="0">
            <Text className="text" fw={600}>
              {name}
            </Text>
            <Text className="text" size="sm" opacity={0.7}>
              {description}
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </Card>
  );
}

export default PromotionCard;
