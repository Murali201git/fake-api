import Image from "next/image";

async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);

  return (
    <div style={styles.container}>
      <Image
        src={product.image}
        width={300}
        height={350}
        alt={product.title}
        style={styles.image}
      />
      <h2 style={styles.title}>{product.title}</h2>
      <p style={styles.description}>{product.description}</p>
      <h2 style={styles.price}>Price of The Article: $ {product.price}</h2>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '420px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid rgba(75, 65, 65, 0.76)',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.05)',
    textAlign: 'center',
  },
  image: {
    height: '200px',
    objectFit: 'contain',
    marginBottom: '20px',
  },
  title: {
    fontSize: '20px',
    margin: '10px 0',
  },
  description: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '16px',
  },
  price: {
    fontSize: '18px',
    color: 'green',
  },
};