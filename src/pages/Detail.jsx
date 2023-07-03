import {
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
  Button,
  ButtonGroup,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CardActionArea,
  CardContent,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React from "react";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Detail() {
  const [count, setCount] = React.useState(1);
  var newProduct = [
    {
      id: 1,
      name: "san pham 1",
      image:
        "https://sneakerdaily.vn/wp-content/uploads/2023/05/giay-bong-ro-tre-em-peak-taichi-flash-sunset-beach-ekt3207a.jpg",
    },
    {
      id: 2,
      name: "san pham 1",
      image:
        "https://sneakerdaily.vn/wp-content/uploads/2023/05/giay-bong-ro-tre-em-peak-taichi-flash-sunset-beach-ekt3207a.jpg",
    },
    {
      id: 3,
      name: "san pham 1",
      image:
        "https://sneakerdaily.vn/wp-content/uploads/2023/05/giay-bong-ro-tre-em-peak-taichi-flash-sunset-beach-ekt3207a.jpg",
    },
    {
      id: 4,
      name: "san pham 1",
      image:
        "https://sneakerdaily.vn/wp-content/uploads/2023/05/giay-bong-ro-tre-em-peak-taichi-flash-sunset-beach-ekt3207a.jpg",
    },
    {
      id: 5,
      name: "san pham 1",
      image:
        "https://sneakerdaily.vn/wp-content/uploads/2023/05/giay-bong-ro-tre-em-peak-taichi-flash-sunset-beach-ekt3207a.jpg",
    },
    {
      id: 6,
      name: "san pham 1",
      image:
        "https://sneakerdaily.vn/wp-content/uploads/2023/05/giay-bong-ro-tre-em-peak-taichi-flash-sunset-beach-ekt3207a.jpg",
    },
    {
      id: 7,
      name: "san pham 1",
      image:
        "https://sneakerdaily.vn/wp-content/uploads/2023/05/giay-bong-ro-tre-em-peak-taichi-flash-sunset-beach-ekt3207a.jpg",
    },
    {
      id: 8,
      name: "san pham 1",
      image:
        "https://sneakerdaily.vn/wp-content/uploads/2023/05/giay-bong-ro-tre-em-peak-taichi-flash-sunset-beach-ekt3207a.jpg",
    },
  ];
  return (
    <Container maxWidth="lg" sx={{ marginBottom: "98px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box>
            <Card sx={{ maxWidth: "100% " }}>
              <CardMedia
                sx={{ height: 380 }}
                image="https://fado.vn/blog/wp-content/uploads/2020/05/giay-sneaker-trang-nu-nen-so-huu-1.jpg"
                title="green iguana"
              />
            </Card>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Box sx={{ marginTop: "10px" }}>
                  <Card sx={{ maxWidth: "100% ", width: "100px" }}>
                    <CardMedia
                      sx={{ height: 65 }}
                      image="https://fado.vn/blog/wp-content/uploads/2020/05/giay-sneaker-trang-nu-nen-so-huu-1.jpg"
                      title="green iguana"
                    />
                  </Card>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box sx={{ marginTop: "10px" }}>
                  <Card sx={{ maxWidth: "100% ", width: "100px" }}>
                    <CardMedia
                      sx={{ height: 65 }}
                      image="https://fado.vn/blog/wp-content/uploads/2020/05/giay-sneaker-trang-nu-nen-so-huu-1.jpg"
                      title="green iguana"
                    />
                  </Card>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box sx={{ marginTop: "10px" }}>
                  <Card sx={{ maxWidth: "100% ", width: "100px" }}>
                    <CardMedia
                      sx={{ height: 65 }}
                      image="https://fado.vn/blog/wp-content/uploads/2020/05/giay-sneaker-trang-nu-nen-so-huu-1.jpg"
                      title="green iguana"
                    />
                  </Card>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" sx={{ fontSize: "30px" }}>
                    GIÀY NIKE AIR JORDAN 1
                    <Typography
                      sx={{
                        fontSize: "20px",
                        color: "red",
                        marginTop: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      2.000.000 (VNĐ)
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography sx={{ marginTop: "30px" }}>
                      SIZE:{" "}
                      <Button
                        variant="outlined"
                        className="btnDetail"
                        sx={{ marginLeft: "20px", color: "black" }}
                      >
                        40
                      </Button>
                      <Button
                        variant="outlined"
                        className="btnDetail"
                        sx={{ marginLeft: "20px", color: "black" }}
                      >
                        41
                      </Button>
                      <Button
                        variant="outlined"
                        className="btnDetail"
                        sx={{ marginLeft: "20px", color: "black" }}
                      >
                        42
                      </Button>
                    </Typography>
                    <Typography sx={{ marginTop: "30px" }}>
                      COLOR:{" "}
                      <Button
                        variant="contained"
                        color="secondary"
                        className="btnDetail"
                        sx={{ marginLeft: "20px" }}
                      ></Button>{" "}
                      <Button
                        variant="contained"
                        color="error"
                        className="btnDetail"
                        sx={{ marginLeft: "20px" }}
                      ></Button>{" "}
                      <Button
                        variant="contained"
                        color="success"
                        className="btnDetail"
                        sx={{ marginLeft: "20px" }}
                      ></Button>{" "}
                    </Typography>
                    <Typography sx={{ marginTop: "30px" }}>
                      Số Lượng : 50{" "}
                      <ButtonGroup sx={{ marginLeft: "20px" }}>
                        <Button
                          aria-label="reduce"
                          onClick={() => {
                            setCount(Math.max(count - 1, 0));
                          }}
                        >
                          <RemoveIcon fontSize="small" />
                        </Button>
                        <Button>3</Button>
                        <Button
                          aria-label="increase"
                          onClick={() => {
                            setCount(count + 1);
                          }}
                        >
                          <AddIcon fontSize="small" />
                        </Button>
                      </ButtonGroup>
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <Box sx={{ marginTop: "30px" }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{
                        float: "left",
                        backgroundColor: "black",
                        marginLeft: "15px",
                      }}
                    >
                      Thêm vào giỏ hàng
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      sx={{
                        float: "left",
                        marginLeft: "20px",
                        backgroundColor: "red",
                      }}
                    >
                      Success
                    </Button>
                  </Box>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Accordion
                      sx={{
                        color: "green",
                        float: "left",
                        maxWidth: "100%",
                        width: "100%",
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>Mô tả sản phẩm</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Hàng nhái , Hàng giả xuất xứ từ trung quốc
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: "100px" }}>
        <Typography
          className="tiltle"
          sx={{ fontSize: "30px", fontWeight: "1000" }}
        >
          Sản phẩm mới
        </Typography>
        <Box className="tiltleLine"></Box>
      </Box>
      <Grid container spacing={2} columns={12}>
        {newProduct.map((product, index) => (
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ maxWidth: "100%" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  key={index}
                  image={product.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {product.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
