import { Box } from "@mui/material";
import Header from "../components/Header";
import LineChart from "../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Profit Comparison" subtitle="Line Chart with Profit Comparison between PS USA and Jorie AI" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;