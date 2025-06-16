import { Box, useTheme, Typography } from '@mui/material'
import Header from '../components/Header'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../theme'

const FAQ = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

const createAccordion = ({question, answer}, index) => {
    return(
    <Accordion  key={index} defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                {question}
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                {answer}
            </Typography>
        </AccordionDetails>
    </Accordion>
    )
}

const faqSample = [
    {question: "AR: Aging Reports missing", answer: "Aging reports not being uploaded on Sharepoint since last week. Talk to John Doe"},
    {question: "Payment Posting: operational costs not updated", answer: "Values from Payment Posting from 2024. Does not containg the values from 2025"},
    {question: "Availity API: payment missing", answer: "Need to add autorenew for Availity"}
]
  return (
    <Box m="20px">
    <Header title="Pending items" subtitle="You have 3 pending items" />

    {faqSample.map((i, index) => (createAccordion(i, index)))}
    </Box>
  )
}

export default FAQ