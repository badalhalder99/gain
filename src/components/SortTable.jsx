import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';

const SortTable = () => {
  const [sortCriteria, setSortCriteria] = useState('');

  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
  };

  const products = useSelector((state) => state.products);

  // Filter the products based on the selected sort criteria
  const filteredProducts = sortProducts(sortCriteria, products);

  return (
    <Container>
      <div className="table-top">
        <h2>ALL Products</h2>
        <label htmlFor="sort-select" className="sortLabel">
          Sort by:{' '}
        </label>{' '}
        <select
          id="sort-select"
          value={sortCriteria}
          onChange={handleSortChange}
        >
          <option value="allproduct">All Products</option>
          <option value="bestvalue">Best Value</option>
          <option value="bestperformance">Best Performance</option>
          <option value="bestcamera">Best Camera</option>
        </select>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Model</th>
              <th>Ram/Rom</th>
              <th>Tag</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id} className="table-row">
                <td>
                  <img
                    className="table-img"
                    src={product.imgUrl}
                    alt={product.brand}
                  />
                  {product.brand}
                </td>
                <td>{product.ram}</td>
                <td>
                  <button>{product.tag}</button>
                </td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

// Helper function to sort the products based on the selected criteria
const sortProducts = (sortCriteria, products) => {
  switch (sortCriteria) {
    case 'allproduct':
      return products;
    case 'bestvalue':
      return products.filter((product) => product.price >= 20000);
    case 'bestperformance':
      return products.filter((product) => product.tag.toLowerCase() === 'best performance');
    case 'bestcamera':
      return products.filter((product) => product.tag.toLowerCase() === 'best camera');
    default:
      return products;
  }
};

export default SortTable;
