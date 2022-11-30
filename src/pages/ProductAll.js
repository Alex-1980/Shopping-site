import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async() => {
    let searchQuery = query.get('q') || "";
    let url = `https://my-json-server.typicode.com/Alex-1980/Shopping-site/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }

  useEffect(() => {
    getProducts()
  }, [query])

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (<Col lg={3}><ProductCard item={menu} /></Col>))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll
