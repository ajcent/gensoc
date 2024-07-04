import { Paper } from "@mantine/core";
import MainImage from "../../components/mainImage/MainImage";

function Workplace() {
  return (
    <Paper
      radius={0}
      component="div"
      style={{ backgroundColor: "var(--color-main-white)" }}
    >
      <MainImage
        header="Gender In Workplace"
        src="https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </Paper>
  );
}

export default Workplace;
