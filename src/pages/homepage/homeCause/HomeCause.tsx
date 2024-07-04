import { Button, Center, Grid, Paper, Stack, Text } from "@mantine/core";
import "./HomeCause.css";
import getPaddingResponsive from "../../../utils/getPaddingResponsive";
import TextOnImage from "../../../components/textOnImage/TextOnImage";
import { Link } from "react-router-dom";

import { LuExternalLink } from "react-icons/lu";

function HomeCause() {
  const paddingResponsive = getPaddingResponsive();
  const columnResponsive = { base: 2, sm: 1, md: 1, lg: 1, xl: 1 };

  return (
    <Paper
      component="section"
      py="5rem"
      px={paddingResponsive}
      className="home-cause"
      radius={0}
    >
      <Stack>
        <Center>
          <Stack gap={0} style={{ zIndex: 1 }} pb="lg">
            <Text tt="uppercase" className="main-text-size" fw={500}>
              Why It Exist
            </Text>

            <Center>
              <Text className="sub-text-size" opacity={0.7}>
                The Reason Behind It
              </Text>
            </Center>
          </Stack>
        </Center>
        <Grid columns={2} style={{ width: "100%" }}>
          <Grid.Col
            className="cause-card"
            span={columnResponsive}
            pos="relative"
          >
            <TextOnImage
              content="The completion rates among rural girls and richest urban girls
                  range from 11.5 to 72.2 percent on upper secondary school."
              src="https://images.unsplash.com/photo-1473649085228-583485e6e4d7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Center
              h="100%"
              w="100%"
              pos="absolute"
              className="cause-overlay education"
            >
              <Stack gap={0}>
                <Text
                  className="carousel-text"
                  px={{ md: "5rem", base: "3rem" }}
                  ta="center"
                  fw={700}
                >
                  Education
                </Text>
                <Link to="education">
                  <Text ta="center" fw={500}>
                    <Button
                      rightSection={<LuExternalLink size={16} />}
                      variant="transparent"
                      className="cause-overlay__link"
                    >
                      Learn more
                    </Button>
                  </Text>
                </Link>
              </Stack>
            </Center>
          </Grid.Col>
          <Grid.Col
            className="cause-card"
            span={columnResponsive}
            pos="relative"
          >
            <TextOnImage
              content="Netherlands became the one who legalize same-sex marriage around 2001 yet as of now, it is still around 37 countries legalizing it."
              src="https://plus.unsplash.com/premium_photo-1674435578145-4ba6ce1dd95c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Center
              h="100%"
              w="100%"
              pos="absolute"
              className="cause-overlay culture"
            >
              <Stack gap={0}>
                <Text
                  className="carousel-text"
                  px={{ md: "5rem", base: "3rem" }}
                  ta="center"
                  fw={700}
                >
                  Culture
                </Text>
                <Link to="culture">
                  <Text ta="center" fw={500}>
                    <Button
                      rightSection={<LuExternalLink size={16} />}
                      variant="transparent"
                      className="cause-overlay__link"
                    >
                      Learn more
                    </Button>
                  </Text>
                </Link>
              </Stack>
            </Center>
          </Grid.Col>
          <Grid.Col span={2} pos="relative">
            <TextOnImage
              content="Gender pay gap exist, giving lesser and lower pay to women and other minorities"
              src="https://images.unsplash.com/photo-1707757072739-7af4ec993444?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Center
              h="100%"
              w="100%"
              pos="absolute"
              className="cause-overlay workplace"
            >
              <Stack gap={0}>
                <Text
                  className="carousel-text"
                  px={{ md: "5rem", base: "3rem" }}
                  ta="center"
                  fw={700}
                >
                  Workplace
                </Text>
                <Link to="workplace">
                  <Text ta="center" fw={500}>
                    <Button
                      rightSection={<LuExternalLink size={16} />}
                      variant="transparent"
                      className="cause-overlay__link"
                    >
                      Learn more
                    </Button>
                  </Text>
                </Link>
              </Stack>
            </Center>
          </Grid.Col>
          <Grid.Col
            className="cause-card"
            span={columnResponsive}
            pos="relative"
          >
            <TextOnImage
              content="Most male rape occur by an acquaintance or stranger while women rape was by their intimate partner and acquaintance."
              src="https://images.unsplash.com/photo-1527236438218-d82077ae1f85?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Center
              h="100%"
              w="100%"
              pos="absolute"
              className="cause-overlay relationship"
            >
              <Stack gap={0}>
                <Text
                  className="carousel-text"
                  px={{ md: "5rem", base: "3rem" }}
                  ta="center"
                  fw={700}
                >
                  Relationship
                </Text>
                <Link to="relationship">
                  <Text ta="center" fw={500}>
                    <Button
                      rightSection={<LuExternalLink size={16} />}
                      variant="transparent"
                      className="cause-overlay__link"
                    >
                      Learn more
                    </Button>
                  </Text>
                </Link>
              </Stack>
            </Center>
          </Grid.Col>
          <Grid.Col
            className="cause-card"
            span={columnResponsive}
            pos="relative"
          >
            <TextOnImage
              content="The more feminist women know about politics, the less they participate, and more strongly so regard to feminist online political activities."
              src="https://plus.unsplash.com/premium_photo-1663054954443-b0d64eb36d29?q=80&w=1504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Center
              h="100%"
              w="100%"
              pos="absolute"
              className="cause-overlay politics"
            >
              <Stack gap={0}>
                <Text
                  className="carousel-text"
                  px={{ md: "5rem", base: "3rem" }}
                  ta="center"
                  fw={700}
                >
                  Politics
                </Text>
                <Link to="politics">
                  <Text ta="center" fw={500}>
                    <Button
                      rightSection={<LuExternalLink size={16} />}
                      variant="transparent"
                      className="cause-overlay__link"
                    >
                      Learn more
                    </Button>
                  </Text>
                </Link>
              </Stack>
            </Center>
          </Grid.Col>
        </Grid>
      </Stack>
    </Paper>
  );
}

export default HomeCause;
