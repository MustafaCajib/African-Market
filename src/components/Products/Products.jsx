import React from "react";
import { Grid } from "@material-ui/core";

import Product from "../Product/Product";

const products = [
    { id: 1, name: "Coffee", description: "Fresh coffee beans from Rwanda" },
    { id: 2, name: "Sunflower seeds", description: "Sunflower seeds from Post Malone and Swae",},
    { id: 3, name: "Coconut Oil", description: "Coconut Oil from Zambia" },
];

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} lg={3}>
                <Product product={product} />
            </Grid>
                ))}
            </Grid>
        </main>
    )
};

export default Products;
