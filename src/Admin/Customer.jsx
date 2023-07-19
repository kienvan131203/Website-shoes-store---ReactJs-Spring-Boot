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
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AdminPage from "./AdminPage";
import TableCustomer from "../layout/Customer/TableCustomer";

export default function Customer() {
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
          Thêm Khách Hàng
        </Typography>

        <Typography>Thêm Khách hàng mới từ các thông tin dưới đây</Typography>
      </Box>
      <Divider />
      <Container>
        <Box sx={{ width: "100%" }}>
          <Box mt={3}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography>Tên khách hàng</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="outlined-basic"
                  label="Tên khách hàng"
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
          <Box
            mt={38}
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
              Thêm Khách Hàng
            </Button>
          </Box>
        </Box>
      </Container>
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
                  <AddIcon /> THÊM KHÁCH HÀNG
                </Button>
              </React.Fragment>
            ))}

            <Button
              sx={{ float: "right", marginTop: "15px" }}
              variant="contained"
              color="error"
            >
              <DeleteIcon /> XÓA
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
                  label="Têm Khách Hàng"
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
          <TableCustomer />
        </Box>
      </Container>
    </AdminPage>
  );
}
