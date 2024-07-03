import "./HomeSlide.css";
import "@mantine/carousel/styles.css";

import { Carousel } from "@mantine/carousel";
import { Center, Text } from "@mantine/core";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Paper } from "@mantine/core";

function HomeSlide() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Paper component="section" radius={0} id="hero">
      <div style={{ height: "100%", width: "100%", display: "flex" }}>
        <Carousel
          withIndicators
          height="100%"
          w="100%"
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          loop
          className="hero-carousel"
        >
          <Carousel.Slide>
            <Center h="100%">
              <Text
                className="carousel-text"
                px={{ md: "5rem", base: "3rem" }}
                ta="center"
              >
                Your gender influence your experience at crisis, healthcare,
                relationship, politics, and more. It encompass everything.
              </Text>
            </Center>
          </Carousel.Slide>
          <Carousel.Slide>
            <Center h="100%">
              <Text
                className="carousel-text"
                px={{ md: "5rem", base: "3rem" }}
                ta="center"
              >
                Gender inequality disproportionately affects women and girls.
                This is more seen to the minority parts of the gender spectrum.
              </Text>
            </Center>
          </Carousel.Slide>
          <Carousel.Slide>
            <Center h="100%">
              <Text
                className="carousel-text"
                px={{ md: "5rem", base: "3rem" }}
                ta="center"
              >
                In most societies, they have lower status and have less control
                over decision-making about their life.
              </Text>
            </Center>
          </Carousel.Slide>
        </Carousel>
      </div>
    </Paper>
  );
}

export default HomeSlide;
