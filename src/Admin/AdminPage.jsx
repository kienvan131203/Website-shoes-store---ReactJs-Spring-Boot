import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LineAxisIcon from "@mui/icons-material/LineAxis";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Link } from "react-router-dom";
import { Collapse, ListItemIcon } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const drawerWidth = 240;

function AdminPage(props) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        KVShop
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "left" }}
            to="/Statistical"
            component={Link}
          >
            <ListItemText>
              <LineAxisIcon />
            </ListItemText>
            <ListItemText sx={{ marginRight: "62px" }}>Thống kê</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "left" }}
            component={Link}
            to="/Order"
          >
            <ListItemText>
              <LocalMallIcon />
            </ListItemText>
            <ListItemText>Quản lý đơn hàng</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "left" }}>
            <ListItemText>
              <AddShoppingCartIcon />
            </ListItemText>
            <ListItemText>Bán hàng tại quầy</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={handleDrawerToggle}>
          <ListItemButton onClick={handleClick}>
            <List sx={{ width: "100%" }}>
              <ListItemIcon>
                <InventoryIcon sx={{ marginRight: "25px" }} />
                <ListItemText primary="Quản lý sản phẩm" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemIcon>

              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    sx={{ pl: 2 }}
                    component={Link}
                    to="/ProductAdmin"
                  >
                    <ListItemText primary="&nbsp;	&bull; &nbsp; &nbsp; Sản phẩm" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 2 }} component={Link} to="/Color">
                    <ListItemText primary="&nbsp;	&bull; &nbsp; &nbsp; Màu sắc" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 2 }}
                    component={Link}
                    to="/Category"
                  >
                    <ListItemText primary="&nbsp;	&bull; &nbsp; &nbsp; Danh mục" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "left" }}
            component={Link}
            to="/Promotions"
          >
            <ListItemText>
              <LoyaltyIcon />
            </ListItemText>
            <ListItemText sx={{ marginRight: "40px" }}>Khuyến mại</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={handleDrawerToggle}>
          <ListItemButton onClick={handleClick}>
            <List sx={{ width: "100%" }}>
              <ListItemIcon>
                <PeopleAltIcon sx={{ marginRight: "25px" }} />
                <ListItemText primary="Tài Khoản" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemIcon>

              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 2 }} component={Link} to="/Staff">
                    <ListItemText primary="&nbsp;	&bull; &nbsp; &nbsp; Nhân Viên" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 2 }}
                    component={Link}
                    to="/Customer"
                  >
                    <ListItemText primary="&nbsp;	&bull; &nbsp; &nbsp; Khách Hàng" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 1, display: { sm: "block" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
      <Box sx={{ marginTop: "80px" }}>{props.children}</Box>
    </Box>
  );
}

AdminPage.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default AdminPage;
