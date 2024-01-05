import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { PRODUCTS_URL, CATEGORIES_URL, CATEGORY_URL } from "../EndPoints";
import Loader from "./Loader";
import { Grid, Box, Container, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";

const ProductCard = () => {
  const [products, setProducts] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // fetch data through api and assign to cards
  React.useEffect(() => {
    getAllProduct();
    getAllCategories();
  }, []);

  const getAllProduct = () => {
    axios
      .get(PRODUCTS_URL)
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getAllCategories = () => {
    axios
      .get(CATEGORIES_URL)
      .then((res) => {
        setCategories(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getProductByCategory = (category) => {
    axios
      .get(`${CATEGORY_URL}${category}`)
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(products);

  if (loading) {
    return <Loader />;
  }
  return (
    <Box sx={{ marginTop: "100px" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <Typography variant="h4">Categories :</Typography>
          <Button onClick={getAllProduct} variant="contained" color="primary">
            All
          </Button>
          {categories?.map((category) => {
            return (
              <Button
                variant="contained"
                color="primary"
                onClick={() => getProductByCategory(category)}
              >
                {category}
              </Button>
            );
          })}
        </Box>
        <Divider sx={{ marginBottom: "20px" }} />
        <Typography variant="h4">Products List</Typography>
        <Grid container spacing={2}>
          {products?.map((product, index) => {
            return (
              <Grid item xs={6} md={3}>
                <Card key={index}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={product?.thumbnail}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product?.brand}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product?.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Chip label={product?.category} color="primary"></Chip>
                    <Link to={`/product/${product?.id}`}>Detail</Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductCard;
