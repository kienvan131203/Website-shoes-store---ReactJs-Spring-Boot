import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
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
import CreateIcon from "@mui/icons-material/Create";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 11),
  createData("Ice cream sandwich", 237, 9.0, 37, 123),
  createData("Eclair", 262, 16.0, 24, 234),
  createData("Cupcake", 305, 3.7, 67, 123),
  createData("Gingerbread", 356, 16.0, 49, 123),
];
export default function TableStaff() {
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
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 750 }}
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
          Cập Nhật Nhân Viên
        </Typography>

        <Typography>Cập Nhật Nhân Viên từ các thông tin dưới đây</Typography>
      </Box>
      <Divider />
      <Container>
        <Box sx={{ width: "100%" }}>
          <Box mt={3}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography>Ảnh nhân viên</Typography>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    border: "2px dotted green",
                    width: "460px",
                    height: "170px",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <img
                      src={selectedFile}
                      alt="Selected"
                      style={{
                        maxHeight: "80px",
                        display: selectedFile ? "block" : "none",
                        marginLeft: "200px",
                      }}
                    />

                    <CloudUploadIcon
                      onClick={handleChooseFile}
                      sx={{ marginLeft: "220px", marginBottom: "7px" }}
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
              </Grid>
            </Grid>
          </Box>
          <Box mt={3}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography>Tên Nhân Viên</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="outlined-basic"
                  label="Tên nhân viên"
                  variant="outlined"
                  size="large"
                  sx={{ width: "100%" }}
                />
              </Grid>
            </Grid>
          </Box>
          <Box mt={3}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography>Email</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  size="large"
                  sx={{ width: "100%" }}
                />
              </Grid>
            </Grid>
          </Box>
          <Box mt={3}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography>Mật Khẩu</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="outlined-basic"
                  label="Mật khẩu"
                  variant="outlined"
                  size="large"
                  sx={{ width: "100%" }}
                />
              </Grid>
            </Grid>
          </Box>
          <Box mt={3}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography>Số điện thoại</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="outlined-basic"
                  label="Số điện thoại"
                  variant="outlined"
                  size="large"
                  sx={{ width: "100%" }}
                />
              </Grid>
            </Grid>
          </Box>
          <Box mt={3}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography>Ngày sinh</Typography>
              </Grid>
              <Grid item xs={8}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker label="MM/DD/YYYY" sx={{ width: "100%" }} />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
            </Grid>
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
              Cập Nhật Nhân Viên
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Action&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              {["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                  <TableCell align="right">
                    <IconButton onClick={toggleDrawer(anchor, true)}>
                      <CreateIcon color="warning" />
                    </IconButton>
                  </TableCell>
                </React.Fragment>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
