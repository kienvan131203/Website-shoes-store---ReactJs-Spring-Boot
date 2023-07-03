import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
  IconButton,
  Link,
} from "@mui/material";
import React from "react";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";
import MailIcon from "@mui/icons-material/Mail";

export default function Account() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Container maxWidth="xl" sx={{ marginBottom: "608px" }}>
      <Grid Container spacing={2} columns={12}>
        <Grid item xs={6} style={{ float: "left" }} className="login">
          <Typography>
            <h2>Đăng Nhập</h2>
          </Typography>
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <FormControl variant="standard">
              <InputLabel
                htmlFor="input-with-icon-adornment"
                className="nameAccount"
              >
                Tên tài khoản hoặc địa chỉ email
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                className="input"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
            <br />
            <FormControl variant="standard">
              <InputLabel
                htmlFor="input-with-icon-adornment"
                className="nameAccount"
              >
                Mật Khẩu
              </InputLabel>

              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                className="input"
                startAdornment={
                  <InputAdornment position="start">
                    <LockIcon fontSize="small" />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      sx={{ padding: "0", minWidth: "0", minHeight: "0" }}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      adge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Nhớ Mật Khẩu"
              size="small"
              sx={{ marginLeft: "0px" }}
            />
          </FormGroup>

          <Button variant="outlined" color="info" className="btnLg">
            Đăng Nhập
          </Button>
          <Button variant="outlined" color="error" className="btnLgGG">
            <GoogleIcon />
          </Button>
          <Typography
            sx={{
              marginTop: "30px",
              marginLeft: "0px",
            }}
          >
            <Link href="#" color="secondary">
              Quên Mật Khẩu?
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ float: "right" }} className="sigup">
          <Typography>
            <h2>Đăng Kí</h2>
          </Typography>
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <FormControl variant="standard">
              <InputLabel
                htmlFor="input-with-icon-adornment"
                className="nameAccount"
              >
                Tên Tài Khoản
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                className="input"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
            <br />
            <FormControl variant="standard">
              <InputLabel
                htmlFor="input-with-icon-adornment"
                className="nameAccount"
              >
                Địa chỉ email
              </InputLabel>

              <Input
                id="input-with-icon-adornment"
                className="input"
                startAdornment={
                  <InputAdornment position="start">
                    <Badge color="secondary" badgeContent={0}>
                      <MailIcon />
                    </Badge>
                  </InputAdornment>
                }
              />
            </FormControl>
            <br />
            <FormControl variant="standard">
              <InputLabel
                htmlFor="input-with-icon-adornment"
                className="nameAccount"
              >
                Mật khẩu
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                className="input"
                startAdornment={
                  <InputAdornment position="start">
                    <LockIcon fontSize="small" />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      sx={{ padding: "0", minWidth: "0", minHeight: "0" }}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      adge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <br />
            <FormControl variant="standard">
              <InputLabel
                htmlFor="input-with-icon-adornment"
                className="nameAccount"
              >
                Nhập lại mật khẩu
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                className="input"
                startAdornment={
                  <InputAdornment position="start">
                    <LockIcon fontSize="small" />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      sx={{ padding: "0", minWidth: "0", minHeight: "0" }}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      adge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                      {/* <RemoveRedEyeIcon /> */}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <Button
            variant="outlined"
            color="info"
            className="btnLg"
            href="Detail"
          >
            Đăng Ký
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
