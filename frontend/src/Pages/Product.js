import React, {Component} from 'react';
import Layout from "../Components/Layout";
import CardProduct from "../Components/CardProduct";

class Product extends Component {
    render() {
        return (
            <Layout>
                <CardProduct/>
            </Layout>
        );
    }
}

export default Product;