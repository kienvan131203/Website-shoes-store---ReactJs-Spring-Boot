import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
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

var Address = [
  {
    xa: "Đông Khê",
    quan: "Đông Sơn",
    thanhpho: "Thanh Hóa",
  },
  {
    xa: "Đông Hòa",
    quan: "Đông Sơn",
    thanhpho: "Thanh Hóa",
  },
  {
    xa: "Đông Ninh",
    quan: "Đông Sơn",
    thanhpho: "Thanh Hóa",
  },
  {
    xa: "Đông Tiến",
    quan: "Đông Sơn",
    thanhpho: "Thanh Hóa",
  },
];
export default function Pay() {
  return (
    <Container maxWidth="xl" sx={{ marginBottom: "608px" }}>
      <Grid Container spacing={2} columns={12}>
        <Grid item xs={6.5} sx={{ float: "left" }}>
          <Typography
            sx={{
              float: "center",
              fontSize: "30px",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            Thông tin thanh toán
          </Typography>
          <Box>
            <TextField
              id="outlined-multiline-flexible"
              label="Họ và tên của bạn"
              multiline
              maxRows={4}
              className="tiltlePay"
            />
          </Box>
          <Box>
            <TextField
              id="outlined-multiline-flexible"
              label="Số điện thoại của bạn"
              multiline
              maxRows={4}
              className="inputSdt"
            />
          </Box>
          <Box>
            <TextField
              id="outlined-multiline-flexible"
              label="Địa chỉ email của bạn"
              multiline
              maxRows={4}
              className="inputEmail"
            />
          </Box>
          <Box>
            <TextField
              id="outlined-multiline-flexible"
              label="Tỉnh/Thành phố"
              select
              maxRows={4}
              className="inputTp"
            >
              {Address.map((address, i) => (
                <MenuItem key={i} value={address.thanhpho}>
                  {address.thanhpho}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box>
            <TextField
              id="outlined-multiline-flexible"
              label="Quận/Huyện"
              select
              maxRows={4}
              className="inputQuan"
            >
              {Address.map((address, i) => (
                <MenuItem key={i} value={address.quan}>
                  {address.quan}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box>
            <TextField
              id="outlined-multiline-flexible"
              label="Xã/Phường"
              select
              maxRows={4}
              className="inputXa"
            >
              {Address.map((address, i) => (
                <MenuItem key={i} value={address.xa}>
                  {address.xa}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box>
            <TextField
              id="outlined-multiline-flexible"
              label="Đia chỉ cụ thể"
              multiline
              maxRows={4}
              className="inputAddress"
            />
          </Box>
          <Box>
            <TextField
              id="outlined-multiline-flexible"
              label="Ghi chú đơn hàng(Tùy Chọn)"
              multiline
              maxRows={4}
              className="inputGc"
            />
          </Box>
        </Grid>

        <Grid item xs={4} sx={{ float: "right" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 550 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography
                      align="center"
                      sx={{
                        paddingTop: "0px",
                        fontSize: "30px",
                        fontWeight: "700",
                        marginBottom: "10px",
                      }}
                    >
                      Đơn hàng của bạn
                    </Typography>
                    <Typography sx={{ float: "left" }}>Sản Phẩm</Typography>
                    <Typography sx={{ float: "right" }}>Giá(VNĐ)</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography sx={{ float: "left" }}>
                      Giày Sneaker Nike Jordanx Dior Air Jordan 1 High
                    </Typography>
                    <Typography sx={{ float: "right" }}>20000</Typography>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography sx={{ float: "left" }}>
                      Giày Sneaker Nike Jordanx Dior Air Jordan 1 High
                    </Typography>
                    <Typography sx={{ float: "right" }}>20000</Typography>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography
                      sx={{
                        float: "left",
                        fontSize: "20px",
                        fontWeight: "700",
                      }}
                    >
                      Phí ship
                    </Typography>
                    <Typography
                      sx={{
                        float: "right",
                        color: "red",
                        fontSize: "20px",
                        fontWeight: "700",
                      }}
                    >
                      20000
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography
                      sx={{
                        float: "left",
                        fontSize: "20px",
                        fontWeight: "700",
                      }}
                    >
                      Tổng Tiền
                    </Typography>
                    <Typography
                      sx={{
                        float: "right",
                        color: "red",
                        fontSize: "20px",
                        fontWeight: "700",
                      }}
                    >
                      20000000
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Thanh toán khi nhận hàng"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Thanh toán ngay"
                        />
                      </RadioGroup>
                    </FormControl>
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ float: "right", marginTop: "100px" }}
                    >
                      Thanh toán
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
}
