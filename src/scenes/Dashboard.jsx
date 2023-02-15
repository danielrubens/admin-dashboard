// import Header from "../components/Header"
// import { Box } from "@mui/material"
// import { Box, Button, IconButton, Typography, useTheme } from "@mui/material"
// import { tokens } from "../theme"
// import { mockTransactions } from "../data/mockData"
// import DownloadOutlinedICon from '@mui/icons-material/DownloadOutlined'
// import EmailICon from '@mui/icons-material/Email'
// import PointOfSaleICon from '@mui/icons-material/PointOfSale'
// import PersonAddICon from '@mui/icons-material/PersonAdd'
// import TrafficICon from '@mui/icons-material/Traffic'
// import { LineChart, BarChart, GeographyChart, StatBox, ProgressCircle } from '../components/'

import { Box, Button, IconButton, Typography, useTheme } from "@mui/material"
import { tokens } from "../theme"
import { mockTransactions } from "../data/mockData"
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from '@mui/icons-material/Email'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import TrafficIcon from '@mui/icons-material/Traffic'
import { BarChart, Header, GeographyChart, LineChart, ProgressCircle,  StatBox } from '../components/'

const Dashboard = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard