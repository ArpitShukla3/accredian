import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name: string, calories: number, fat: number) {
  return { name, calories, fat };
}

const rows = [
  createData(
    "Professional Certificate Program in Product Management",
    7000,
    9000
  ),
  createData(
    "PG Certificate Program in Strategic Product Management",
    9000,
    11000
  ),
  createData(
    "Executive Program in Data Driven Product Management",
    10000,
    10000
  ),
  createData(
    "Executive Program in Product Management and Digital Transformation",
    10000,
    10000
  ),
  createData("Executive Program in Product Management", 10000, 10000),
  createData("Advanced Certification in Product Management", 10000, 10000),
  createData(
    "Executive Program in Product Management and Project Management",
    10000,
    10000
  ),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{backgroundColor:"#EBF3FF59"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="bg-blue-400" sx={{ fontSize: "2rem" }}>
            <TableCell
              sx={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1350A0" }}
            >
              Programs
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1350A0" }}
            >
              Referrer Bonus
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1350A0" }}
            >
              Referee Bonus&nbsp;(g)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 }}}
            >
              <TableCell component="th" scope="row" sx={{ fontSize: "1.2rem", width:"30vw" }}>
                {row.name}
              </TableCell>
              <TableCell align="right" sx={{ fontSize: "1.2rem" }}>
                {row.calories}
              </TableCell>
              <TableCell align="right" sx={{ fontSize: "1.2rem" }}>
                {row.fat}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
