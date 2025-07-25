import { Row, Col } from 'react-bootstrap';
import products from '../products';

import Product from '../components/Product';

const HomeScreen = () => {
  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {products.map((product) => (
          <Col className='sm-12' md='6' lg='4' xl='3'>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
