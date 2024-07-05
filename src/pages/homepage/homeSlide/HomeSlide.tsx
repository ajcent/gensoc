import "./HomeSlide.css";
import "@mantine/carousel/styles.css";

import { Carousel } from "@mantine/carousel";
import { BackgroundImage, Center, Text } from "@mantine/core";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Paper } from "@mantine/core";

function HomeSlide() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Paper component="section" radius={0} id="hero">
      <div style={{ height: "100%", width: "100%", display: "flex" }}>
        <Carousel
          withControls={false}
          draggable={false}
          withIndicators
          height="100%"
          w="100%"
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          loop
          className="hero-carousel no-select"
        >
          <Carousel.Slide>
            <BackgroundImage
              h="100%"
              src="https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            >
              <Center className="carousel-center" h="100%">
                <Text
                  className="carousel-text"
                  px={{ md: "5rem", base: "3rem" }}
                  ta="center"
                  fw={600}
                >
                  Your gender influence your experience at crisis, healthcare,
                  relationship, politics, and more. It encompass everything.
                </Text>
              </Center>
            </BackgroundImage>
          </Carousel.Slide>

          <Carousel.Slide>
            <BackgroundImage
              h="100%"
              src="https://images.unsplash.com/photo-1476469535352-80159d0af31d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            >
              <Center className="carousel-center" h="100%">
                <Text
                  className="carousel-text"
                  px={{ md: "5rem", base: "3rem" }}
                  ta="center"
                  fw={600}
                >
                  Gender inequality disproportionately affects women and girls.
                  This is more seen to the minority parts of the gender
                  spectrum.
                </Text>
              </Center>
            </BackgroundImage>
          </Carousel.Slide>

          <Carousel.Slide>
            <BackgroundImage
              h="100%"
              src="https://images.unsplash.com/photo-1594230612535-e4a08d4cb18b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            >
              <Center className="carousel-center" h="100%">
                <Text
                  className="carousel-text"
                  px={{ md: "5rem", base: "3rem" }}
                  ta="center"
                  fw={600}
                >
                  In most societies, they have lower status and have less
                  control over decision-making about their life.
                </Text>
              </Center>
            </BackgroundImage>
          </Carousel.Slide>
        </Carousel>
      </div>
    </Paper>
  );
}

export default HomeSlide;
