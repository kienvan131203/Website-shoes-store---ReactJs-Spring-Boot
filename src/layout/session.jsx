import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Container, Grid } from "@mui/material";
import Carousel from "react-material-ui-carousel";

function CarouselShop() {
  var Image = [
    "https://sneakerdaily.vn/wp-content/uploads/2023/05/6.png.webp",
    "https://sneakerdaily.vn/wp-content/uploads/2023/05/10.png.webp",
    "https://sneakerdaily.vn/wp-content/uploads/2023/05/6.png.webp",
  ];
  return (
    <Carousel>
      {Image.map((image, i) => (
        <img
          alt="ko co anh"
          key={i}
          src={image}
          style={{ width: "100%", height: "600px" }}
        />
      ))}
    </Carousel>
  );
}
function ProductHome() {
  var newProduct = [
    {
      id: 1,
      name: "san pham 1",
      image:
        "https://sneakerdaily.vn/wp-content/uploads/2023/05/giay-bong-ro-tre-em-peak-taichi-flash-sunset-beach-ekt3207a.jpg",
    },
    {
      id: 2,
      name: "san pham 1",
      image:
        "https://sneakerdaily.vn/wp-content/uploads/2023/05/giay-bong-ro-tre-em-peak-taichi-flash-sunset-beach-ekt3207a.jpg",
    },
    {
      id: 3,
      name: "san pham 1",
      image:
        "https://sneakerdaily.vn/wp-content/uploads/2023/05/giay-bong-ro-tre-em-peak-taichi-flash-sunset-beach-ekt3207a.jpg",
    },
    {
      id: 4,
      name: "san pham 1",
      image:
        "https://sneakerdaily.vn/wp-content/uploads/2023/05/giay-bong-ro-tre-em-peak-taichi-flash-sunset-beach-ekt3207a.jpg",
    },
    {
      id: 5,
      name: "san pham 1",
      image:
        "https://sneakerdaily.vn/wp-content/uploads/2023/05/giay-bong-ro-tre-em-peak-taichi-flash-sunset-beach-ekt3207a.jpg",
    },
    {
      id: 6,
      name: "san pham 1",
      image:
        "https://sneakerdaily.vn/wp-content/uploads/2023/05/giay-bong-ro-tre-em-peak-taichi-flash-sunset-beach-ekt3207a.jpg",
    },
    {
      id: 7,
      name: "san pham 1",
      image:
        "https://sneakerdaily.vn/wp-content/uploads/2023/05/giay-bong-ro-tre-em-peak-taichi-flash-sunset-beach-ekt3207a.jpg",
    },
    {
      id: 8,
      name: "san pham 1",
      image:
        "https://sneakerdaily.vn/wp-content/uploads/2023/05/giay-bong-ro-tre-em-peak-taichi-flash-sunset-beach-ekt3207a.jpg",
    },
  ];
  return (
    <Grid container spacing={2}>
      {newProduct.map((product, index) => (
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: "100%" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                key={index}
                image={product.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {product.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
      ;
    </Grid>
  );
}
export default function ActionAreaCard() {
  return (
    <>
      <CarouselShop />
      <Container maxWidth="lg">
        <Typography
          className="tiltle"
          sx={{ fontSize: "30px", fontWeight: "1000" }}
        >
          Sản phẩm mới
        </Typography>
        <Box className="tiltleLine"></Box>
        <ProductHome />
        <Typography
          className="tiltle"
          sx={{ fontSize: "30px", fontWeight: "1000" }}
        >
          Sản phẩm bán chạy
        </Typography>
        <Box className="tiltleLine"></Box>
        <ProductHome />
      </Container>
    </>
  );
}
