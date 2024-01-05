import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { PRODUCTS_URL } from "../EndPoints";
import Loader from "./Loader";
import { Box, Container } from "@mui/material";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    axios
      .get(`${PRODUCTS_URL}${productId}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <Box sx={{ marginTop: "100px" }}>
      <Container>
        <Card>
          <CardMedia
            component="img"
            alt={product?.brand}
            height="300"
            image={product?.thumbnail}
          />
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {product?.brand}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              Category: {product?.category}
            </Typography>
            <Typography variant="h5" color="primary" gutterBottom>
              Price: {product?.price}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              Description: {product?.description}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default ProductDetail;
