import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DataGrid } from "@mui/x-data-grid";
import AdminPage from "./AdminPage";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

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

export default function Order() {
  return (
    <AdminPage>
      <Container maxWidth="lg">
        <Typography
          variant
          sx={{
            float: "left",
            fontSize: "25px",
            fontWeight: "1000",
            paddingBottom: "20px",
          }}
        >
          Đơn đặt hàng
        </Typography>
        <br />
        <Box
          sx={{
            py: 2,
            my: 3,
            maxWidth: "100%",
            backgroundColor: "rgb(249, 249, 249);",
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={2} columns={12}>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  sx={{ width: "100%", float: "left" }}
                  id="outlined-basic"
                  label="Tìm kiếm theo tên khách hàng"
                  variant="outlined"
                  size="medium"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">
                    Trạng thái
                  </InputLabel>
                  <Select
                    sx={{ width: "100%" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Màu Sắc"
                    size="medium"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">
                    Giới hạn đặt hàng
                  </InputLabel>
                  <Select
                    sx={{ width: "100%" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Giới hạn đặt hàng"
                    size="medium"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker label="Từ Ngày" sx={{ width: "100%" }} />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker label="Đến Ngày" sx={{ width: "100%" }} />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    width: "100%",
                    height: "55px",
                    marginTop: "8px",
                    backgroundColor: "#4cd964",
                  }}
                >
                  Tải xuống tất cả đơn hàng đã đặt
                  <CloudDownloadIcon />
                </Button>
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
