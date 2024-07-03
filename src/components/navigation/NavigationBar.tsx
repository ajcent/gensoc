import { Button, List } from "@mantine/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./NavigationBar.css";
import getPaddingResponsive from "../../utils/getPaddingResponsive";
import BrandName from "../brandname/BrandName";

function NavigationBar() {
  const paddingResponsive = getPaddingResponsive();

  return (
    <List id="navigation" px={paddingResponsive} py="md">
      <List.Item>
        <BrandName size="md" />
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
