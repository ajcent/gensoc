import { Paper } from "@mantine/core";
import MainImage from "../../components/mainImage/MainImage";

function Culture() {
  return (
    <Paper
      radius={0}
      component="div"
      style={{ backgroundColor: "var(--color-main-white)" }}
    >
      <MainImage
        header="Gender In Culture"
        src="https://images.unsplash.com/photo-1519802772250-a52a9af0eacb?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </Paper>
  );
}

export default Culture;
