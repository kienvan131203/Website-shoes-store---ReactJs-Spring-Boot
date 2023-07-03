import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Container, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CardMedia from "@mui/material/CardMedia";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

function NewData() {
  const [count, setCount] = React.useState(1);

  const Data = [
    {
      img: "data:image/jpeg;base64,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",
      name: "GIÀY NIKE AIR JORDAN 1 ",
      price: 200000,
      quantity: 3,
    },
    {
      img: "data:image/jpeg;base64,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",
      name: "GIÀY NIKE AIR JORDAN 1 ",
      price: 200000,
      quantity: 3,
    },
    {
      img: "data:image/jpeg;base64,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",
      name: "GIÀY NIKE AIR JORDAN 1 ",
      price: 200000,
      quantity: 2,
    },
  ];
  return (
    <TableBody>
      {Data.map((newData, i) => (
        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
          <TableCell>
            {" "}
            <CardMedia
              component="img"
              sx={{ width: "30px", height: "30px" }}
              key={i}
              image={newData.img}
              alt="green iguana"
              align="right"
            />
          </TableCell>
          <TableCell key={i}>{newData.name}</TableCell>
          <TableCell align="left" key={i}>
            {newData.price} (VNĐ)
          </TableCell>
          <TableCell align="left">
            <ButtonGroup>
              <Button
                aria-label="reduce"
                onClick={() => {
                  setCount(Math.max(count - 1, 0));
                }}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <Button aria-label="reduce">{newData.quantity}</Button>
              <Button
                aria-label="increase"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </TableCell>
          <TableCell align="left">
            {newData.price * newData.quantity} (VNĐ)
          </TableCell>
          <TableCell>
            <Button
              sx={{ padding: "0", minWidth: "0", minHeight: "0", color: "red" }}
            >
              <DeleteSweepIcon />
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default function BasicTable() {
  return (
    <Container maxWidth="xl" sx={{ marginBottom: "79px" }}>
      <Grid container>
        <Grid item xs={7.5}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left"></TableCell>
                  <TableCell
                    align="left"
                    sx={{ fontSize: "18px", fontWeight: "700" }}
                  >
                    Sản Phẩm
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ fontSize: "18px", fontWeight: "700" }}
                  >
                    Giá
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ fontSize: "18px", fontWeight: "700" }}
                  >
                    Số Lượng
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ fontSize: "18px", fontWeight: "700" }}
                  >
                    Tạm Tính
                  </TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
              </TableHead>
              <NewData />
            </Table>
          </TableContainer>
          <Button
            variant="outlined"
            color="error"
            sx={{ float: "left", marginTop: "30px" }}
            href="/product"
          >
            <ArrowBackIcon /> Tiếp tục mua hàng
          </Button>
        </Grid>
        <Grid item xs={4.2}>
          <TableContainer className="tableDH" component={Paper}>
            <Table
              aria-label="simple table"
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                height: "500px",
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography
                      align="center"
                      sx={{
                        paddingTop: "0px",
                        fontSize: "30px",
                        fontWeight: "700",
                        marginBottom: "10px",
                      }}
                    >
                      Đơn hàng của bạn
                    </Typography>
                    <Typography sx={{ float: "left" }}>Sản Phẩm</Typography>
                    <Typography sx={{ float: "right" }}>Giá(VNĐ)</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography sx={{ float: "left" }}>
                      Giày Sneaker Nike Jordanx Dior Air Jordan 1 High
                    </Typography>
                    <Typography sx={{ float: "right" }}>20000</Typography>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography sx={{ float: "left" }}>
                      Giày Sneaker Nike Jordanx Dior Air Jordan 1 High
                    </Typography>
                    <Typography sx={{ float: "right" }}>20000</Typography>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography
                      sx={{
                        float: "left",
                        fontSize: "20px",
                        fontWeight: "700",
                      }}
                    >
                      Tạm Tính
                    </Typography>
                    <Typography
                      sx={{
                        float: "right",
                        color: "red",
                        fontSize: "20px",
                        fontWeight: "700",
                      }}
                    >
                      2000000
                    </Typography>
                  </TableCell>
                </TableRow>

                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ float: "right", marginTop: "100px" }}
                      href="/Pay"
                    >
                      <MonetizationOnIcon /> Tiến hành thanh toán
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
}
