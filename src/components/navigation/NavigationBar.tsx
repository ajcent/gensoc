import { Button, List, Image, Flex } from "@mantine/core";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import getPaddingResponsive from "../../utils/getPaddingResponsive";
import BrandName from "../brandname/BrandName";

function NavigationBar() {
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

      <List.Item>
        <Button variant="filled" color="black">
          Act Now
        </Button>
      </List.Item>
    </List>
  );
}

export default NavigationBar;
