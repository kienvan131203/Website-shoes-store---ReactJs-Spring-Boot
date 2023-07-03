import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box
      sx={{
        flexGrow: "1",
        width: "100%",
        height: "80px",
        backgroundColor: "#ee4d2d",
        marginTop: "50px",
      }}
    >
      <Typography
        sx={{
          lineHeight: "80px",
          fontSize: "20px",
          fontWeight: "1000",
          color: "white",
        }}
      >
        {" "}
        Đây Là Footer
      </Typography>
    </Box>
  );
}
