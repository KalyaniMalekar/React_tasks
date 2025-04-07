import React from 'react'
import styles from '../src/ProductCard.module.css'

function ProductCard({photo,productName,price,onAdd}) {
  return (
    <div className={styles.productCard}>
    <img src={photo} alt={productName} className={styles.productImage} />
    <h1 className={styles.productName}>Product Name: {productName}</h1>
    <h2 className={styles.productPrice}>Price: ₹{price}</h2>
    <button className={styles.addButton} onClick={onAdd} >Add</button>
  </div>
  )
}

export default ProductCard