import { Paper } from "@mantine/core";
import MainImage from "../../components/mainImage/MainImage";

function Education() {
  return (
    <Paper
      radius={0}
      component="div"
      style={{ backgroundColor: "var(--color-main-white)" }}
    >
      <MainImage
        header="Gender In Education"
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </Paper>
  );
}

export default Education;
