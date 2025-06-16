import { Box } from "@mui/material";
import Header from "../components/Header";
import BarChart from "../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Denial Reason" subtitle="Bar chart with Denial Reason for CPTS CO58, COB7, OA18 and CO119" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;