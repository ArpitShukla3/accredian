import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function AccordionUsage() {
  return (
    <div>
      <Accordion sx={{width:"60vw", gap:"4px", border:"0" } } defaultExpanded>
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={faAngleDown} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ color: "skyblue" }}
          
        >
          Accordion 1Do I need to have prior Product Management and Project
          Management experience to enroll in the program?
        </AccordionSummary>
        <AccordionDetails>
          No, the program is designed to be inclusive of all levels of
          experience. All topics will be covered from the basics, making it
          suitable for individuals from any field of work.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={faAngleDown} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ color: "skyblue" }}
        >
          What is the minimum system configuration required?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
