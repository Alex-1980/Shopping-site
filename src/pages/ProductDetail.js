import React, {useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

const ProductDetail = () => {
  let {id} = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/Alex-1980/Shopping-site/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }

  useEffect(() => {
    getProductDetail()
  }, [])

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} />
        </Col>
        <Col>
          <div className='product-title'>{product?.title}</div>
          <div className='product-price'>${product?.price}</div>
          <DropdownButton className='product-size' size="lg" title="Size">
            <Dropdown.Item href="#/action-1">{product?.size[0]}</Dropdown.Item>
            <Dropdown.Item href="#/action-2">{product?.size[1]}</Dropdown.Item>
            <Dropdown.Item href="#/action-3">{product?.size[2]}</Dropdown.Item>
          </DropdownButton>
          <Button className='add-btn' variant="dark"  size="lg"><FontAwesomeIcon className='bag-icon' icon={faBagShopping} />Add to bag</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
