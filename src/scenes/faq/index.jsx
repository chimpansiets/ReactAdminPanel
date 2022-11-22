import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What frameworks did you use building this admin panel?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I used React, Material UI, Nivo Charts, Full Calendar, Data Grid, Formik,
			Yup validation, React-pro-sidebar and Google Fonts.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
			What is the purpose of this admin panel?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This admin panel is a template for a React admin panel.
			It is a portfolio project to show my skills as a web developer.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
			What is your favorite animal?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Not an easy question, but baby elephants are probably the cutest.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What's the answer to life, the universe, and everything?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Easy question, 42.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What did you learn by building this project?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I learned a lot about React, Material UI and several other packages used in this project.
			Most valuable was learning how to use Formik and Yup validation in my opinion.
			The ease of use of all the components used in this project really surprised me and I
			hope to use them in future projects.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;