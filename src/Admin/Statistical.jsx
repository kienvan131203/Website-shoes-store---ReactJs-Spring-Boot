import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import InventoryTwoToneIcon from "@mui/icons-material/InventoryTwoTone";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { DataGrid } from "@mui/x-data-grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AdminPage from "./AdminPage";

ChartJS.register();

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

export default function Statistical() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const data = {
    labels: [
      2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
      2022, 2023,
    ],
    datasets: [
      {
        label: "sản phẩm",
        data: [
          100, 400, 100, 703, 650, 65, 512, 84, 91, 232, 521, 112, 213, 113,
        ],
      },
    ],
  };
  return (
    <AdminPage>
      <Container maxWidth="lg" sx={{ marginBottom: "100px" }}>
        <Typography
          sx={{
            float: "left",
            fontSize: "25px",
            fontWeight: "1000",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          Dashboard Overview
        </Typography>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                maxWidth: "100%",
                backgroundColor: "rgb(6, 148, 162)",
                color: "white",
              }}
            >
              <CardMedia />
              <CardContent>
                <InventoryTwoToneIcon />
                <Typography sx={{ fontSize: "20px" }}>
                  Đơn hàng hôm nay
                </Typography>
                <Typography
                  sx={{
                    fontSize: "25px",
                    fontWeight: "1000",
                    marginTop: "8px",
                  }}
                >
                  100.000.000 VNĐ
                </Typography>
                <Grid
                  container
                  spacing={2}
                  columns={12}
                  sx={{ marginTop: "8px", marginBottom: "8px" }}
                >
                  <Grid item xs={6}>
                    <Typography>Sản Phẩm</Typography>
                    <Typography sx={{ fontWeight: "1000" }}>12</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>Đơn hàng</Typography>
                    <Typography sx={{ fontWeight: "1000" }}>10</Typography>
                  </Grid>
                </Grid>{" "}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                maxWidth: "100%",
                backgroundColor: "rgb(255, 138, 76)",
                color: "white",
              }}
            >
              <CardMedia />
              <CardContent>
                <InventoryTwoToneIcon />
                <Typography sx={{ fontSize: "20px" }}>
                  Đơn hàng hôm nay
                </Typography>
                <Typography
                  sx={{
                    fontSize: "25px",
                    fontWeight: "1000",
                    marginTop: "8px",
                  }}
                >
                  100.000.000 VNĐ
                </Typography>
                <Grid
                  container
                  spacing={2}
                  columns={12}
                  sx={{ marginTop: "8px", marginBottom: "8px" }}
                >
                  <Grid item xs={6}>
                    <Typography>Sản Phẩm</Typography>
                    <Typography sx={{ fontWeight: "1000" }}>12</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>Đơn hàng</Typography>
                    <Typography sx={{ fontWeight: "1000" }}>10</Typography>
                  </Grid>
                </Grid>{" "}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                maxWidth: "100%",
                backgroundColor: "rgb(63, 131, 248)",
                color: "white",
              }}
            >
              <CardMedia />
              <CardContent>
                <InventoryTwoToneIcon />
                <Typography sx={{ fontSize: "20px" }}>
                  Đơn hàng hôm nay
                </Typography>
                <Typography
                  sx={{
                    fontSize: "25px",
                    fontWeight: "1000",
                    marginTop: "8px",
                  }}
                >
                  100.000.000 VNĐ
                </Typography>
                <Grid
                  container
                  spacing={2}
                  columns={12}
                  sx={{ marginTop: "8px", marginBottom: "8px" }}
                >
                  <Grid item xs={6}>
                    <Typography>Sản Phẩm</Typography>
                    <Typography sx={{ fontWeight: "1000" }}>12</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>Đơn hàng</Typography>
                    <Typography sx={{ fontWeight: "1000" }}>10</Typography>
                  </Grid>
                </Grid>{" "}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                maxWidth: "100%",
                backgroundColor: "rgb(14, 159, 110)",
                color: "white",
              }}
            >
              <CardMedia />
              <CardContent>
                <InventoryTwoToneIcon />
                <Typography sx={{ fontSize: "20px" }}>
                  Đơn hàng hôm nay
                </Typography>
                <Typography
                  sx={{
                    fontSize: "25px",
                    fontWeight: "1000",
                    marginTop: "8px",
                  }}
                >
                  100.000.000 VNĐ
                </Typography>
                <Grid
                  container
                  spacing={2}
                  columns={12}
                  sx={{ marginTop: "8px", marginBottom: "8px" }}
                >
                  <Grid item xs={6}>
                    <Typography>Sản Phẩm</Typography>
                    <Typography sx={{ fontWeight: "1000" }}>12</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>Đơn hàng</Typography>
                    <Typography sx={{ fontWeight: "1000" }}>10</Typography>
                  </Grid>
                </Grid>{" "}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box sx={{}}>
          <Typography
            sx={{ float: "left", marginTop: "20px", fontWeight: "1000" }}
          >
            Biểu đồ thống kê
          </Typography>
          <Grid container spacing={2} columns={12}>
            <Grid item xs={12} sm={6} md={3}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker label="Từ Ngày" />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker label="đến Ngày" />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div>
                <FormControl sx={{ m: 1, minWidth: 120, maxWidth: "100%" }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Giá trị hiện hành
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="Giá trị hiện hành"
                    onChange={handleChange}
                    size="medium"
                    sx={{ width: "240px" }}
                  >
                    <MenuItem value={10}>Sản phẩm</MenuItem>
                    <MenuItem value={20}>Đơn hàng</MenuItem>
                    <MenuItem value={30}>Tổng tiền</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Grid>
          </Grid>
          <Box mt={2} width={"99%"}>
            <Line data={data} height={"100%"} />
          </Box>
        </Box>

        <Typography
          sx={{
            fontWeight: "1000",
            float: "left",
            fontSize: "20px",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          Danh sách sản phẩm bán chạy trong tháng
        </Typography>

        <Box
          style={{
            height: 400,
            width: "100%",
            float: "left",
            marginBottom: "50px",
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
      </Container>
    </AdminPage>
  );
}
