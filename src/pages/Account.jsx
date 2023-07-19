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
  Input,
  InputAdornment,
  InputLabel,
  Typography,
  IconButton,
  Link,
  Tab,
} from "@mui/material";
import React, { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";
import MailIcon from "@mui/icons-material/Mail";
import { TabContext, TabList, TabPanel } from "@mui/lab";

export default function Account() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [value, setValue] = useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container maxWidth="xl" sx={{ marginBottom: "165px", marginTop: "50px" }}>
      <Box sx={{ width: "100%", border: "3px solid black" }}>
        <Box>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                width: "500px",
                marginLeft: "500px",
                fontSize: "50px",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab
                  sx={{
                    fontSize: "17px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                  label="Đăng Nhập"
                  value="0"
                />
                <Tab
                  sx={{
                    fontSize: "17px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                  label="Đăng Ký"
                  value="1"
                />
              </TabList>
            </Box>
            <TabPanel value="0">
              <Box className="login">
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
                    sx={{ marginLeft: "485px" }}
                  />
                </FormGroup>
                <Box sx={{ marginRight: "255px" }}>
                  <Button variant="contained" sx={{ backgroundColor: "black" }}>
                    Đăng Nhập
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    sx={{ marginLeft: "20px" }}
                  >
                    <GoogleIcon />
                  </Button>
                </Box>
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
              </Box>
            </TabPanel>
            <TabPanel value="1">
              <Box className="sigup">
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
                  variant="contained"
                  href="Detail"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    marginRight: "355px",
                  }}
                >
                  Đăng Ký
                </Button>
              </Box>
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Container>
  );
}
