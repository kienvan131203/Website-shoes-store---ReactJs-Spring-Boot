import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }} className="header">
      <AppBar position="static" sx={{ backgroundColor: "#ee4d2d" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button component={Link} color="inherit" to="/">
            Trang Chủ
          </Button>
          <Button component={Link} color="inherit" to="/product">
            Sản Phẩm
          </Button>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            KV SHOP
          </Typography>
          <Button to="/cartdetail" component={Link} color="inherit">
            <Badge badgeContent={4} color="error">
              <ShoppingCartIcon color="inherit" />
            </Badge>
          </Button>
          <Button href="/Account">
            <Stack direction="row" spacing={4}>
              <Avatar src="/broken-image.jpg" className="user" />
            </Stack>
          </Button>
          <Button color="inherit" href="/Account">
            Đăng Nhập
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
