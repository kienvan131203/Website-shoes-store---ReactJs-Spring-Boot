import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AdminPage from "./AdminPage";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
export default function Promotions() {
  const [state, setState] = React.useState({});

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 650 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box pl={3} sx={{ backgroundColor: "rgb(249, 249, 249);" }}>
        <IconButton
          variant="outlined"
          color="error"
          sx={{ float: "right", borderRadius: "40px" }}
          onClick={toggleDrawer(anchor, false)}
        >
          <HighlightOffIcon sx={{ width: "45px", height: "45px" }} />
        </IconButton>
        <Typography sx={{ fontSize: "30px", fontWeight: "1000" }}>
          Thêm phiếu giảm giá
        </Typography>

        <Typography>
          Thêm phiếu giảm giá mới của bạn từ các thông tin dưới đây
        </Typography>
      </Box>
      <Divider />

      <Box mt={3} pl={3}>
        <h3>Tên chiến dịch:</h3>
        <TextField
          id="outlined-basic"
          label="Tên chiến dịch"
          variant="outlined"
          size="large"
          sx={{ width: "450px" }}
        />
      </Box>
      <Box mt={3} pl={3}>
        <h3>Mã chiến dịch:</h3>
        <TextField
          id="outlined-basic"
          label="mã chiến dịch"
          variant="outlined"
          size="large"
          sx={{ width: "450px" }}
        />
      </Box>
      <Box mt={3} pl={3}>
        <h3>Thời gian bắt đầu:</h3>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateTimePicker"]}>
            <DateTimePicker
              label="Thời gian hiệu lực"
              sx={{ width: "450px" }}
            />
          </DemoContainer>
        </LocalizationProvider>
      </Box>
      <Box mt={3} pl={3}>
        <h3>Thời gian kết thúc:</h3>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateTimePicker"]}>
            <DateTimePicker
              label="Thời gian hiệu lực"
              size="small"
              sx={{ width: "450px" }}
            />
          </DemoContainer>
        </LocalizationProvider>
      </Box>
      <Box mt={3} pl={3}>
        <h3>Loại giảm giá:</h3>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Loại giảm giá</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{ width: "450px" }}
              label="Loại Giá giá"
            >
              <MenuItem value={10}>%</MenuItem>
              <MenuItem value={20}>Giá tiên</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box mt={3} pl={3}>
        <h3>Giá trị giảm:</h3>
        <TextField
          id="outlined-basic"
          label="Giá trị giảm"
          variant="outlined"
          size="large"
          sx={{ width: "450px" }}
        />
      </Box>
      <Box
        mt={10}
        sx={{ backgroundColor: "rgb(249, 249, 249);" }}
        px={3}
        py={3}
      >
        <Button
          variant="outlined"
          color="error"
          sx={{ width: "280px", marginRight: "30px" }}
          onClick={toggleDrawer(anchor, false)}
        >
          hủy
        </Button>
        <Button variant="contained" color="success" sx={{ width: "280px" }}>
          Thêm Phiếu giảm giá
        </Button>
      </Box>
    </Box>
  );
  return (
    <AdminPage>
      <Container maxWidth="lg">
        <Typography
          sx={{
            float: "left",
            fontSize: "20px",
            fontWeight: "1000",
          }}
        >
          Products
        </Typography>
        <br />

        <Box
          sx={{
            height: "70px",
            marginTop: "30px",
            backgroundColor: "rgb(249, 249, 249);",
          }}
        >
          <Container maxWidth="lg">
            <Button
              sx={{ float: "left", marginTop: "15px" }}
              variant="outlined"
              color="error"
            >
              <FileUploadIcon /> Export Excel
            </Button>
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
                <Button
                  sx={{ float: "right", marginLeft: "10px", marginTop: "15px" }}
                  variant="contained"
                  color="success"
                  onClick={toggleDrawer(anchor, true)}
                >
                  <AddIcon /> Add Product
                </Button>
              </React.Fragment>
            ))}

            <Button
              sx={{ float: "right", marginTop: "15px" }}
              variant="contained"
              color="error"
            >
              <DeleteIcon /> Delete
            </Button>
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
              <Grid item xs={12}>
                <TextField
                  sx={{ width: "100%" }}
                  id="outlined-basic"
                  label="Tìm kiếm theo mã/tên phiếu giảm giá"
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
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </Box>
        {/* <TemporaryDrawer /> */}
      </Container>
    </AdminPage>
  );
}
