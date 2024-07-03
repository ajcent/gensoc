import { Text } from "@mantine/core";

import "./BrandName.css";

interface BrandNameProps {
  size: "xs" | "sm" | "md" | "lg" | "xl";
}

function BrandName(props: BrandNameProps) {
  const { size } = props;

  return (
    <Text
      size={size}
      id="brand-name"
      component="h4"
      fw={700}
      display="inline-block"
    >
      Moral{" "}
      <Text inherit component="span" fw={500} display="inline-block">
        Matrix
      </Text>
    </Text>
  );
}

export default BrandName;
