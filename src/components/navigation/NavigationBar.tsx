import { Button, List, Image, Flex, Burger } from "@mantine/core";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import getPaddingResponsive from "../../utils/getPaddingResponsive";
import BrandName from "../brandname/BrandName";
import { useDisclosure } from "@mantine/hooks";
import MobileNavigation from "../mobileNavigation/MobileNavigation";

function NavigationBar() {
  const [opened, { open, close }] = useDisclosure(false);
  const paddingResponsive = getPaddingResponsive();

  return (
    <List id="navigation" px={paddingResponsive} py="xs">
      <List.Item>
        <Link to="/" className="link">
          <Flex align="center">
            <Image
              src="https://github.com/ajcent/gensoc/blob/main/public/homepage/logo.png?raw=true"
              w="35px"
              mr="md"
            />
            <BrandName size="md" />
          </Flex>
        </Link>
      </List.Item>
      <List.Item visibleFrom="md">
        <Link to="education" className="link">
          Education
        </Link>
      </List.Item>
      <List.Item visibleFrom="md">
        <Link to="culture" className="link">
          Culture
        </Link>
      </List.Item>
      <List.Item visibleFrom="md">
        <Link to="workplace" className="link">
          Workplace
        </Link>
      </List.Item>
      <List.Item visibleFrom="md">
        <Link to="relationship" className="link">
          Relationship
        </Link>
      </List.Item>
      <List.Item visibleFrom="md">
        <Link to="politics" className="link">
          Politics
        </Link>
      </List.Item>

      <List.Item visibleFrom="md">
        <Button variant="filled" color="black">
          Act Now
        </Button>
      </List.Item>

      <List.Item hiddenFrom="md">
        <Burger
          color="black"
          opened={opened}
          onClick={open}
          aria-label="Toggle navigation"
        />
        <MobileNavigation opened={opened} close={close} />
      </List.Item>
    </List>
  );
}

export default NavigationBar;
