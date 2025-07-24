'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);




  return (
    <main style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {products.map(product => (
        <Link
          key={product.id}
          href={`/product/${product.id}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div style={styles.card}>
            <img src={product.image} width={300} alt={product.title} style={styles.image} />
            <h3 style={styles.title}>{product.title}</h3>
            <p style={styles.price}>$ {product.price}</p>
          </div>
        </Link>
      ))}
    </main>
  );
};






const styles = {
  card: {
    width: '300px',
    height: '300px',
    border: '1px solid #ccc',
    padding: '16px',
    margin: '12px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    cursor: 'pointer',
  },
  image: {
    height: '150px',
    width: '250px',
    objectFit: 'contain',
    marginBottom: '10px',
  },
  title: {
    fontSize: '16px',
    marginBottom: '8px',
  },
  price: {
    fontWeight: 'bold',
    color: 'green',
  },
};

export default Cards;