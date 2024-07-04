import { Text } from "@mantine/core";

import "./BrandName.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

interface BrandNameProps {
  size: "xs" | "sm" | "md" | "lg" | "xl";
}

function BrandName(props: BrandNameProps) {
  const { size } = props;
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Link to="/">
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
    </Link>
  );
}

export default BrandName;
