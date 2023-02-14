import { Box, useTheme, Typography } from '@mui/material'
import Header from '../../components/Header'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../theme'

const FAQ = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

const createAccordion = (question, answer) => {
    return(
        <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography colors={colors.greenAccent[500]} variant="h5">
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
    {question: "Example of first question", answer: "Example of first answer"},
    {question: "Example of second question", answer: "Example of second answer"},
    {question: "Example of third question", answer: "Example of third answer"}
]
  return (
    <>
    {faqSample.map((i) => (createAccordion(i.question, i.answer)))}
    </>
  )
}

export default FAQ