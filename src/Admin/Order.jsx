import { Box, Container, Tab, Typography } from "@mui/material";
import React, { useState } from "react";
import AdminPage from "./AdminPage";
import { TabContext, TabList } from "@mui/lab";
import Order from "../layout/Order/Order";

export default function OrderAdmin() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <AdminPage>
      <Container maxWidth="lg">
        <Typography variant="h6" fontWeight={"bold"} my={2}>
          Products
        </Typography>

        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Chờ xác nhận" />
                <Tab label="Chờ giao" />
                <Tab label="Đang giao" />
                <Tab label="Hoàn Thành" />
                <Tab label="Hủy" />
              </TabList>
            </Box>
            {/* <TabPanel value="0"></TabPanel>
            <TabPanel value="1"></TabPanel>
            <TabPanel value="2"></TabPanel>
            <TabPanel value="3"></TabPanel>
            <TabPanel value="4"></TabPanel> */}
          </TabContext>
        </Box>
        <Order status={value} />
      </Container>
    </AdminPage>
  );
}
