import "./MobileNavigation.css";
import { Drawer, List, Button, Text } from "@mantine/core";
import { Link } from "react-router-dom";

interface MobileNavigationProps {
  opened: boolean;
  close: () => void;
}

function MobileNavigation(props: MobileNavigationProps) {
  const { opened, close } = props;

  return (
    <Drawer
      opened={opened}
      onClose={close}
      title={<Text fw={700}>Navigation</Text>}
      className="mobile-navigation__wrapper"
    >
      <List id="mobile-navigation">
        <List.Item>
          <Link onClick={close} to="education" className="link">
            Education
          </Link>
        </List.Item>
        <List.Item>
          <Link onClick={close} to="culture" className="link">
            Culture
          </Link>
        </List.Item>
        <List.Item>
          <Link onClick={close} to="workplace" className="link">
            Workplace
          </Link>
        </List.Item>
        <List.Item>
          <Link onClick={close} to="relationship" className="link">
            Relationship
          </Link>
        </List.Item>
        <List.Item>
          <Link onClick={close} to="politics" className="link">
            Politics
          </Link>
        </List.Item>

        <List.Item>
          <Button variant="filled" color="black">
            Act Now
          </Button>
        </List.Item>
      </List>
    </Drawer>
  );
}

export default MobileNavigation;
