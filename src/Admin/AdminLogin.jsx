import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function BasicTextFields() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          //   border: "2px solid black",
          boxShadow: "2px 2px 2px 2px #ee4d2d",
          width: "500px",
          marginLeft: "330px",
          marginTop: "150px",
          marginBottom: "128px",
        }}
      >
        <Typography sx={{ fontSize: "30px", fontWeight: "1000" }}>
          Đăng Nhập Admin
        </Typography>
        <Box>
          {" "}
          <TextField
            id="outlined-basic"
            label="Tên Đăng Nhập"
            variant="outlined"
            sx={{ width: "400px", marginTop: "30px" }}
            size="medium"
          />
        </Box>
        <Box>
          <TextField
            id="outlined-basic"
            label="Mật Khẩu"
            variant="outlined"
            sx={{ width: "400px", marginTop: "30px" }}
            size="medium"
          />
        </Box>
        <Button
          variant="contained"
          disableElevation
          sx={{ width: "400px", marginTop: "30px", marginBottom: "20px" }}
          color="warning"
          component={Link}
          to="/AdminPage"
        >
          Đăng Nhập
        </Button>
        <Typography>
          <Link sx={{ textDecoration: "none" }} href="#">
            Quên mật khẩu?
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}
