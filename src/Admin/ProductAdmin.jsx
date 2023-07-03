import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
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
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import DetailProducts from "./DetailProducts";
import AdminPage from "./AdminPage";

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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProductAdmin() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(URL.createObjectURL(file));
    // Do something with the selected file
    console.log(file);
  };

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  const fileInputRef = React.useRef(null);
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
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 950 }}
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
          Thêm sản phẩm
        </Typography>

        <Typography>
          Thêm sản phẩm mới của bạn từ các thông tin dưới đây
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Sản Phẩm" {...a11yProps(0)} />
            <Tab label="Chi Tiết Sản Phẩm" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box mt={1} pl={3}>
            <h2>Tên sản phẩm:</h2>
            <TextField
              id="outlined-basic"
              label="Tên Sản Phẩm"
              variant="outlined"
              size="small"
              sx={{ width: "750px" }}
            />
          </Box>
          <Box mt={3} pl={3}>
            <h2>Ảnh sản phẩm:</h2>
            <Box
              sx={{
                border: "2px dotted green",
                width: "750px",
                height: "200px",
              }}
            >
              <div style={{ position: "relative" }}>
                <img
                  src={selectedFile}
                  alt="Selected"
                  style={{
                    maxHeight: "80px",
                    display: selectedFile ? "block" : "none",
                    marginLeft: "340px",
                  }}
                />

                <CloudUploadIcon
                  onClick={handleChooseFile}
                  sx={{ marginLeft: "360px", marginBottom: "7px" }}
                />
                <Typography sx={{ textAlign: "center" }}>
                  Drag your images here
                </Typography>
                <Typography sx={{ textAlign: "center" }}>
                  (only *.jpg *.webp and *.png images will be accept)
                </Typography>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
              </div>
            </Box>
          </Box>
          <Box mt={3} pl={3}>
            <h2>Mô tả:</h2>
            <TextField
              id="outlined-basic"
              label="Mô Tả"
              variant="outlined"
              size="small"
              sx={{ width: "750px" }}
            />
          </Box>

          <Box
            mt={4}
            sx={{
              backgroundColor: "rgb(249, 249, 249);",
            }}
            ml={10}
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
              Thêm Sản Phẩm
            </Button>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <DetailProducts />
        </TabPanel>
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
