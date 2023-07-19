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
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";

export default function Account(props) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <ListItem disablePadding onClick={handleDrawerToggle}>
      <ListItemButton>
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
              <ListItemButton sx={{ pl: 2 }} component={Link} to="/Category">
                <ListItemText primary="&nbsp;	&bull; &nbsp; &nbsp; Danh mục" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </ListItemButton>
    </ListItem>
  );
}
