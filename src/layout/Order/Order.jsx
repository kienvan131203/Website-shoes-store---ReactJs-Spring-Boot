import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

import CheckIcon from "@mui/icons-material/Check";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PreviewIcon from "@mui/icons-material/Preview";
import TableOrder from "./TableOrder";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Order({ status }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const OrderService = [
    { NameButton: "Xác nhận", icon: <CheckIcon />, color: "success" },
    { NameButton: "Giao hàng", icon: <LocalShippingIcon />, color: "warning" },
    {
      NameButton: "Hoàn thành",
      icon: <AssignmentTurnedInIcon />,
      color: "inherit",
    },
  ];
  return (
    <Container>
      <Box
        sx={{
          height: "70px",
          marginTop: "30px",
          backgroundColor: "rgb(249, 249, 249);",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box>
                <Button sx={{ float: "left" }} variant="outlined" color="error">
                  <FileUploadIcon /> Export Excel
                </Button>
              </Box>
            </Grid>
            <Grid itemxs={12} sm={6}>
              {status < 4 && (
                <Button
                  sx={{ float: "right", marginLeft: "10px", marginTop: "15px" }}
                  variant="contained"
                  color="error"
                >
                  <DeleteIcon /> HỦY
                </Button>
              )}
              {status < 3 && (
                <Button
                  sx={{ float: "right", marginTop: "15px" }}
                  variant="contained"
                  color={OrderService[status].color}
                >
                  {OrderService[status].icon}
                  {OrderService[status].NameButton}
                </Button>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          py: 2,
          my: 3,
          maxWidth: "100%",
          backgroundColor: "rgb(249, 249, 249);",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                sx={{ width: "100%" }}
                id="outlined-basic"
                label="Search product"
                variant="outlined"
                size="small"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          height: 400,
          width: "100%",
          backgroundColor: "rgb(249, 249, 249);",
        }}
      >
        {/* <TableOrder
          DataHeader={{
            mot: "Ten 1",
            hai: "Ten 2",
            ba: "Ten 2",
            bon: "Ten 2",
            nam: "Ten 2",
          }}
        /> */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">
                    {status < 3 && (
                      <IconButton color={OrderService[status].color}>
                        {OrderService[status].icon}
                      </IconButton>
                    )}

                    <IconButton color="secondary" onClick={handleOpen}>
                      <PreviewIcon />
                    </IconButton>
                    {status < 4 ? (
                      <IconButton color="error">
                        <DeleteIcon />
                      </IconButton>
                    ) : (
                      ""
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" mb={3}>
            Sản phẩm của đơn hàng
          </Typography>
          <TableOrder />
          <Box mx={2} mt={4}>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6}>
                <Button
                  variant="contained"
                  color="inherit"
                  sx={{ width: "100%" }}
                >
                  Ẩn
                </Button>
              </Grid>
              <Grid xs={12} sm={6}>
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ width: "100%", marginLeft: "16px" }}
                >
                  Giao hàng
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
}
