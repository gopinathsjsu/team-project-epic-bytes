import * as React from "react";
import { useEffect } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DescriptionIcon from '@mui/icons-material/Description';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function ControlledAccordions({ disabled, isOpen }) {
  console.log('isOpen', isOpen);
  const [expanded, setExpanded] = React.useState(isOpen ? "panel3" : false);

  useEffect(() => {
    setExpanded(isOpen ? "panel3" : false);
  }, [isOpen]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")} disabled={disabled}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            <DescriptionIcon/> Summary Of Charges
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography>test</Typography> */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>RATE DETAILS</TableCell>
                  <TableCell align="right">Prices in USD</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow style={{height: 5}}>
                    <TableCell component="th" scope="row">Total Room price = Room Price * Room(s) * Night(s)</TableCell>
                    <TableCell align="right">400 * 2 * 3 = 2400</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">Add-on charges * Night(s) </TableCell>
                    <TableCell align="right">160 * 3 = 480</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">Taxable Amount: </TableCell>
                    <TableCell align="right">2880</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">Tax (10%): </TableCell>
                    <TableCell align="right">+ 288</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">Surcharge: </TableCell>
                    <TableCell align="right">+ 0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">Member discount: PLATINUM - 20.0%: </TableCell>
                    <TableCell align="right">- 576</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">TOTAL STAY </TableCell>
                    <TableCell align="right">2592 USD</TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
