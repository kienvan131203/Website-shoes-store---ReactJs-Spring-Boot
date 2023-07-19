import {
  Box,
  Button,
  Container,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DataGrid } from "@mui/x-data-grid";
import AdminPage from "./AdminPage";
import Divider from "@mui/material/Divider";

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
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function Price() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Thêm Danh mục
                </Typography>
                <Typography id="modal-modal-title" component="h2">
                  Thêm Danh mục mới của sản phẩm từ các thông tin dưới đây
                </Typography>

                <Divider />
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <h3>Danh mục Sản phẩm: </h3>
                  <TextField
                    id="outlined-basic"
                    label="Danh mục Sản Phẩm"
                    variant="outlined"
                    size="small"
                    sx={{
                      width: "100%",

                      marginBottom: "70px",
                    }}
                  />
                </Typography>
                <Divider />
                <Box mt={1}>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={handleClose}
                    sx={{ width: "47%", marginRight: "28px" }}
                  >
                    Hủy
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    sx={{ width: "47%" }}
                  >
                    Thêm Danh mục
                  </Button>
                </Box>
              </Box>
            </Modal>
            <Button
              sx={{ float: "right", marginLeft: "10px", marginTop: "15px" }}
              variant="contained"
              color="success"
              onClick={handleOpen}
            >
              <AddIcon /> Add Product
            </Button>
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
              <Grid item xs={12} sm={4}>
                <TextField
                  sx={{ width: "100%" }}
                  id="outlined-basic"
                  label="Search product"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Category"
                    size="small"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
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
