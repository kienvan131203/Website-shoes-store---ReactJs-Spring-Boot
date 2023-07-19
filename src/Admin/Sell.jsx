import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Box,
  Button,
  ButtonGroup,
  CardMedia,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  Switch,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import AdminPage from "./AdminPage";
import AddIcon from "@mui/icons-material/Add";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import PersonIcon from "@mui/icons-material/Person";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const dataSell = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUAa6tCPGZKcZeYkRj2WTJS3lnqF0Zq4LzOg&usqp=CAU",
    name: "Giầy nike Air Force 1 ",
    price: "300000",
    size: "41",
    quantity: "4",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUAa6tCPGZKcZeYkRj2WTJS3lnqF0Zq4LzOg&usqp=CAU",
    name: "Giầy nike Air Force 1 ",
    price: "300000",
    size: "41",
    quantity: "4",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUAa6tCPGZKcZeYkRj2WTJS3lnqF0Zq4LzOg&usqp=CAU",
    name: "Giầy nike Air Force 1 ",
    price: "300000",
    size: "41",
    quantity: "4",
  },

  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUAa6tCPGZKcZeYkRj2WTJS3lnqF0Zq4LzOg&usqp=CAU",
    name: "Giầy nike Air Force 1 ",
    price: "300000",
    size: "41",
    quantity: "4",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUAa6tCPGZKcZeYkRj2WTJS3lnqF0Zq4LzOg&usqp=CAU",
    name: "Giầy nike Air Force 1 ",
    price: "300000",
    size: "41",
    quantity: "4",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUAa6tCPGZKcZeYkRj2WTJS3lnqF0Zq4LzOg&usqp=CAU",
    name: "Giầy nike Air Force 1 ",
    price: "300000",
    size: "41",
    quantity: "4",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUAa6tCPGZKcZeYkRj2WTJS3lnqF0Zq4LzOg&usqp=CAU",
    name: "Giầy nike Air Force 1 ",
    price: "300000",
    size: "41",
    quantity: "4",
  },
];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const styleCustomer = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const styleKh = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
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

export default function Sell() {
  const [value, setValue] = useState(0);
  const [orders, setOrders] = useState([]);

  const generateOrderCode = () => {
    // Tạo mã hóa đơn dựa vào thời gian hiện tại
    const now = new Date();
    const orderCode = now.getTime().toString();

    // Tạo đối tượng đơn hàng mới
    const newOrder = { code: orderCode, name: `HD ${orderCode}` };

    // Thêm đơn hàng mới vào danh sách
    setOrders((prevOrders) => [...prevOrders, newOrder]);

    // Chuyển sang tab hiển thị đơn hàng mới
    setValue(orders.length);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [Productopen, setProductOpen] = React.useState(false);
  const DetailProductOpen = () => setProductOpen(true);
  const DetailProductClose = () => setProductOpen(false);

  const [Customeropen, setCustomerOpen] = React.useState(false);
  const DetailCustomerOpen = () => setCustomerOpen(true);
  const DetailCustomerClose = () => setCustomerOpen(false);

  const [AddCustomeropen, setAddCustomerOpen] = React.useState(false);
  const DetailAddCustomerOpen = () => setAddCustomerOpen(true);
  const DetailAddCustomerClose = () => setAddCustomerOpen(false);

  const [count, setCount] = React.useState(1);

  const [giaoHang, setGioHang] = useState(false);

  const formChecker = () => {
    setGioHang(!giaoHang);
  };
  // const [invisible, setInvisible] = React.useState(false);

  // const handleBadgeVisibility = () => {
  //   setInvisible(!invisible);
  // };

  return (
    <AdminPage>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={2}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "1000" }}>
            Bán hàng
          </Typography>
          <Button
            onClick={generateOrderCode}
            variant="contained"
            color="secondary"
          >
            Tạo đơn hàng
          </Button>
        </Stack>
        <div>
          <Tabs value={value} onChange={handleChange}>
            {orders.map((order, index) => (
              <Tab key={index} label={order.name} />
            ))}
          </Tabs>
        </div>
        <Box>
          <TableContainer component={Paper} sx={{ maxHeight: "500px" }}>
            <Table
              sx={{ minWidth: "100%", minHeight: "800px" }}
              aria-label="simple table"
            >
              <TableHead
                sx={{
                  position: "sticky",
                  top: "0",
                  backgroundColor: "white",
                }}
              >
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="left">
                    <Typography sx={{ fontSize: "25px", fontWeight: "1000" }}>
                      {" "}
                      Sản phẩm
                    </Typography>
                  </TableCell>

                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="success"
                      onClick={handleOpen}
                    >
                      <AddIcon />
                      Thêm sản phẩm
                    </Button>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataSell.map((sellProduct, i) => (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell sx={{ width: "20px" }}>
                      {" "}
                      <IconButton>
                        <HighlightOffIcon color="error" />
                      </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {" "}
                      <CardMedia
                        component="img"
                        sx={{ width: "150px", marginRight: "20px" }}
                        key={i}
                        image={sellProduct.image}
                        alt="green iguana"
                        align="left"
                      />
                      <Box sx={{ marginTop: "40px" }}>
                        <Typography
                          sx={{ fontWeight: "1000", fontSize: "20px" }}
                        >
                          {" "}
                          {sellProduct.name}
                        </Typography>
                        <Typography sx={{ color: "red", fontWeight: "700" }}>
                          {" "}
                          {sellProduct.price}
                          <u>đ</u>
                        </Typography>
                        <Typography> Size: {sellProduct.size}</Typography>
                      </Box>
                    </TableCell>

                    <TableCell align="right">
                      <Grid container spacing={2}>
                        <Grid item sm={6}>
                          <Box
                            sx={{
                              color: "action.active",
                              display: "flex",
                              flexDirection: "column",
                              "& > *": {
                                marginBottom: 2,
                              },
                              "& .MuiBadge-root": {
                                marginRight: 4,
                              },
                            }}
                          >
                            <div>
                              <ButtonGroup>
                                <Button
                                  aria-label="reduce"
                                  onClick={() => {
                                    setCount(Math.max(count - 1, 0));
                                  }}
                                >
                                  <RemoveIcon fontSize="small" />
                                </Button>

                                <TextField
                                  sx={{ width: "40px" }}
                                  id="outlined-size-normal"
                                  value={sellProduct.quantity}
                                />
                                <Button
                                  aria-label="increase"
                                  onClick={() => {
                                    setCount(count + 1);
                                  }}
                                >
                                  <AddIcon fontSize="small" />
                                </Button>
                              </ButtonGroup>
                            </div>
                          </Box>
                        </Grid>
                        <Grid item sm={6}>
                          <Typography sx={{ color: "red", fontWeight: "700" }}>
                            {sellProduct.price * sellProduct.quantity}
                            <u>đ</u>
                          </Typography>
                        </Grid>
                      </Grid>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box sx={{ marginTop: "50px" }}>
          {" "}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: "100%" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    {" "}
                    <Typography sx={{ fontSize: "25px", fontWeight: "1000" }}>
                      {" "}
                      Khách hàng
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ float: "right" }}
                        onClick={DetailCustomerOpen}
                      >
                        <PersonIcon /> Chọn khách hàng
                      </Button>
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="flex-start"
                      spacing={2}
                    >
                      <Box sx={{ display: "flex" }}>
                        <Typography
                          sx={{
                            fontWeight: "1000",
                            marginLeft: "10px",
                            fontSize: "20px",
                          }}
                        >
                          Tên khách hàng
                        </Typography>
                        <Typography
                          sx={{
                            marginLeft: "20px",
                            borderRadius: "50px",
                            backgroundColor: "rgb(240, 240, 240)",
                            padding: "5px 10px",
                          }}
                        >
                          Khách lẻ
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",

                          justifyContent: "flex-end",
                        }}
                      >
                        {" "}
                        <Typography
                          sx={{
                            marginTop: "5px",
                            fontWeight: "1000",
                            float: "right",
                          }}
                        >
                          Giao hàng
                        </Typography>{" "}
                        <Switch
                          onChange={formChecker}
                          checked={giaoHang}
                          defaultChecked
                          color="secondary"
                        />
                      </Box>
                    </Stack>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={7}>
                        {" "}
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            "& > :not(style)": { m: 1 },
                          }}
                        >
                          <TextField
                            id="demo-helper-text-misaligned"
                            disabled={!giaoHang}
                            label="Họ & Tên"
                            size="small"
                            sx={{ width: "100%" }}
                          />
                          <TextField
                            id="demo-helper-text-misaligned-no-helper"
                            disabled={!giaoHang}
                            label="Số điện thoại"
                            size="small"
                            sx={{ width: "100%" }}
                          />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            "& > :not(style)": { m: 1 },
                          }}
                        >
                          <FormControl fullWidth size="small">
                            <InputLabel id="demo-simple-select-label">
                              Tỉnh/Thành phố
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-small-label"
                              disabled={!giaoHang}
                              id="demo-simple-small-select"
                              label="Tỉnh/Thành phố"
                              size="small"
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                          <FormControl fullWidth size="small">
                            <InputLabel id="demo-simple-select-label">
                              Quận/Huyện
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              disabled={!giaoHang}
                              id="demo-simple-select"
                              label="Quận/Huyện"
                              size="small"
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                          <FormControl fullWidth size="small">
                            <InputLabel id="demo-simple-select-label">
                              Phường/Xã
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              disabled={!giaoHang}
                              id="demo-simple-select"
                              label="Phường/Xã"
                              size="small"
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                        <Box
                          sx={{
                            alignItems: "center",
                            "& > :not(style)": { m: 1 },
                            width: "98%",
                          }}
                        >
                          <TextField
                            id="demo-helper-text-misaligned-no-helper"
                            disabled={!giaoHang}
                            label="Địa chỉ cụ thể"
                            size="small"
                            sx={{ width: "100%" }}
                          />
                        </Box>
                        <Box
                          sx={{
                            "& > :not(style)": { m: 1 },
                            width: "98%",
                          }}
                        >
                          <TextField
                            id="demo-helper-text-misaligned-no-helper"
                            disabled={!giaoHang}
                            label="Ghi chú"
                            size="small"
                            sx={{ width: "100%" }}
                          />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            marginLeft: "10px",
                            color: !giaoHang ? "#E0E0E0" : "",
                          }}
                        >
                          <LocalShippingIcon />
                          <Typography sx={{ fontWeight: "1000" }}>
                            Đơn vị vận chuyển:{" "}
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "1000",
                              color: !giaoHang ? "#E0E0E0" : "green",
                            }}
                          >
                            {" "}
                            Giao hàng nhanh
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={5}>
                        <Box
                          sx={{
                            display: "flex",
                            "& > :not(style)": { m: 1 },
                            width: "100%",
                            marginLeft: "15px",
                          }}
                        >
                          <TextField
                            id="demo-helper-text-misaligned-no-helper"
                            label="Ghi chú"
                            size="small"
                            sx={{ width: "50%" }}
                          />
                          <Button variant="outlined" color="secondary">
                            Áp Dụng
                          </Button>
                        </Box>
                        <Grid container spacing={2}>
                          <Grid
                            item
                            xs={5}
                            sx={{
                              "& > :not(style)": { m: 3 },
                            }}
                          >
                            <Typography>Tiền hàng</Typography>
                            <Typography>Phí vận chuyển</Typography>
                            <Typography>Giảm giá</Typography>
                            <Typography sx={{ fontWeight: "1000" }}>
                              Tổng số tiền
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={7}
                            sx={{
                              "& > :not(style)": { m: 3 },
                            }}
                          >
                            <Typography align="right">
                              200.000<u>đ</u>
                            </Typography>
                            <Typography align="right">
                              20.000<u>đ</u>
                            </Typography>
                            <Typography align="right">
                              0<u>đ</u>
                            </Typography>
                            <Typography
                              align="right"
                              sx={{ color: "red", fontWeight: "1000" }}
                            >
                              500.000<u>đ</u>
                            </Typography>
                            <Button
                              variant="contained"
                              color="success"
                              sx={{ float: "right" }}
                            >
                              Xác nhận đặt hàng
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography variant="h6">Tìm kiếm sản phẩm</Typography>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1 },
                  display: "flex",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Tên sản phẩm"
                  variant="outlined"
                  size="small"
                  sx={{ width: "70%" }}
                />
                <Button variant="contained" color="primary">
                  Tìm kiếm
                </Button>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography>Danh mục:</Typography>
                <Typography>Màu sắc:</Typography>
                <Typography>Sắp xếp:</Typography>
              </Box>
              <TableContainer component={Paper} sx={{ maxHeight: "500px" }}>
                <Table
                  sx={{ minWidth: "100%", minHeight: "800px" }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">
                        <Typography sx={{ fontWeight: "1000" }}>
                          {" "}
                          Sản phẩm
                        </Typography>
                      </TableCell>
                      <TableCell align="center">Tên</TableCell>
                      <TableCell align="right">Giá</TableCell>
                      <TableCell align="right">Thao tác</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {dataSell.map((sellProduct, i) => (
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {" "}
                          <CardMedia
                            component="img"
                            sx={{ width: "150px", marginRight: "20px" }}
                            key={i}
                            image={sellProduct.image}
                            alt="green iguana"
                            align="left"
                          />
                          <Box sx={{ marginTop: "40px" }}></Box>
                        </TableCell>
                        <TableCell align="left">
                          {" "}
                          <Typography
                            sx={{ fontWeight: "1000", fontSize: "20px" }}
                          >
                            {" "}
                            {sellProduct.name}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography sx={{ color: "red", fontWeight: "700" }}>
                            {sellProduct.price * sellProduct.quantity}
                            <u>đ</u>
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Button
                            variant="outlined"
                            color="warning"
                            onClick={DetailProductOpen}
                          >
                            Chọn
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Modal>
        </Box>
        <Box>
          <Modal
            open={Productopen}
            onClose={DetailProductClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={styleKh}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
              ></Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </Box>
        <Box>
          <Modal
            open={Customeropen}
            onClose={DetailCustomerClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={styleCustomer}>
              <IconButton onClick={DetailCustomerClose} sx={{ float: "right" }}>
                {" "}
                <HighlightOffIcon color="error" />
              </IconButton>
              <Typography variant="h6">Tìm kiếm khách hàng</Typography>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1 },
                  display: "flex",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Tên sản phẩm"
                  variant="outlined"
                  size="small"
                  sx={{ width: "70%" }}
                />
                <Button variant="contained" color="primary">
                  Tìm kiếm
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  onClick={DetailAddCustomerOpen}
                >
                  Thêm
                </Button>
              </Box>
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
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Modal>
        </Box>
        <Box>
          <Modal
            open={AddCustomeropen}
            onClose={DetailAddCustomerClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={styleKh}>
              <IconButton
                onClick={DetailAddCustomerClose}
                sx={{ float: "right" }}
              >
                {" "}
                <HighlightOffIcon color="error" />
              </IconButton>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Thêm khách hàng{" "}
              </Typography>
              <Box sx={{ "& > :not(style)": { m: 1 } }}>
                <TextField
                  id="outlined-basic"
                  label="Tên Khách hàng"
                  variant="outlined"
                  size="small"
                  sx={{ width: "95%" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  size="small"
                  sx={{ width: "95%" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Số điện thoại"
                  variant="outlined"
                  size="small"
                  sx={{ width: "95%" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Địa chỉ"
                  variant="outlined"
                  size="small"
                  sx={{ width: "95%" }}
                />
              </Box>
            </Box>
          </Modal>
        </Box>
      </Container>
    </AdminPage>
  );
}
