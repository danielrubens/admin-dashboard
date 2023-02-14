import Header from "../components/Header"
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material"
import { tokens } from "../theme"
import { mockTransactions } from "../data/mockData"
import DownloadOutlinedICon from '@mui/icons-material/DownloadOutlined'
import EmailICon from '@mui/icons-material/Email'
import PointOfSaleICon from '@mui/icons-material/PointOfSale'
import PersonAddICon from '@mui/icons-material/PersonAdd'
import TrafficICon from '@mui/icons-material/Traffic'
import { LineChart, BarChart, GeographyChart, StatBox, ProgressCircle } from '../components/'


const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
    </Box>
  )
}

export default Dashboard