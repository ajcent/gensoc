import "./Footer.css";

import { Grid, Paper, Stack, Text } from "@mantine/core";
import BrandName from "../brandname/BrandName";
import getPaddingResponsive from "../../utils/getPaddingResponsive";
import { useViewportSize } from "@mantine/hooks";

const minWidth: number = 850;

function Footer() {
  const { width } = useViewportSize();
  const paddingResponsive = getPaddingResponsive();

  return (
    <Paper
      id="footer"
      component="section"
      px={paddingResponsive}
      radius={0}
      py="xl"
    >
      <Grid columns={width <= minWidth ? 2 : 5}>
        <Grid.Col span={width <= minWidth ? 1 : 2}>
          <Stack>
            <BrandName size="xl" />
          </Stack>
        </Grid.Col>
        <Grid.Col span={1} className="footer-topic">
          <Stack>
            <Text fw={700}>Topic</Text>
            <Text>Page</Text>
            <Text>Page</Text>
            <Text>Page</Text>
          </Stack>
        </Grid.Col>
        <Grid.Col span={1} className="footer-topic">
          <Stack>
            <Text fw={700}>Topic</Text>
            <Text>Page</Text>
            <Text>Page</Text>
            <Text>Page</Text>
          </Stack>
        </Grid.Col>
        <Grid.Col span={1} className="footer-topic">
          <Stack>
            <Text fw={700}>Topic</Text>
            <Text>Page</Text>
            <Text>Page</Text>
            <Text>Page</Text>
          </Stack>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}

export default Footer;
