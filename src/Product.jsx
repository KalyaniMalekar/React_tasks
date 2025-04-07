import React, { useState } from 'react'
import ProductCard from './ProductCard'
import styles from '../src/Product.module.css' 

function Product() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const existingProduct = cart.find(item => item.productName === product.productName);

    if (existingProduct) {
      setCart(cart.map(item =>
        item.productName === product.productName ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleIncrement = (productName) => {
    setCart(cart.map(item =>
      item.productName === productName ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecrement = (productName) => {
    setCart(cart.map(item =>
      item.productName === productName && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.cardBox}>
        <ProductCard photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToqcu-QbrgO6kQQYyyadUWTctNflGKwWa-0A&s" productName="Product-1" price={500} onAdd={() => handleAddToCart({ productName: 'Product-1', price: 500 })}/>
        <ProductCard photo="https://c1.wallpaperflare.com/preview/215/884/837/cat-food-pet-food-cat-food.jpg" productName="Product-2" price={450} onAdd={() => handleAddToCart({ productName: 'Product-2', price: 450 })}/>
        <ProductCard photo="https://media.istockphoto.com/id/678257014/photo/dog-food-in-the-bowl-and-bone-shaped-biscuits.jpg?s=612x612&w=0&k=20&c=lLzJYxxglUmtXOrlUqdtHbB-2p7q5NBSYZ4EI6bL8Fc=" productName="Product-3" price={600} onAdd={() => handleAddToCart({ productName: 'Product-3', price: 600 })}/>
        <ProductCard photo="https://thumbs.dreamstime.com/b/granulated-animal-food-background-texture-isolated-black-82269379.jpg" productName="Product-4" price={660} onAdd={() => handleAddToCart({ productName: 'Product-4', price: 660 })}/>
        <ProductCard photo="https://2.wlimg.com/product_images/bc-small/2022/5/10227941/dog-food-1653039815-6348915.jpeg" productName="Product-5" price={422} onAdd={() => handleAddToCart({ productName: 'Product-5', price: 422 })}/>
        <ProductCard photo="https://www.kroger.com/product/images/large/right/0002310014359" productName="Product-6" price={580} onAdd={() => handleAddToCart({ productName: 'Product-6', price: 580 })} />
      </div>

      <div className={styles.mainBox}>
      <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className={styles.cartBox}>
            {cart.map(item => (
              <div key={item.productName} className={styles.cartCard}>
                <h3>{item.productName}</h3>
                <div>
                  <button onClick={() => handleDecrement(item.productName)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item.productName)}>+</button>
                </div>
                <p>Total: ₹{item.price * item.quantity}</p>
              </div>
            ))}
          </div>
          
        )}
        <h3>Total Price: ₹{totalPrice}</h3>
      </div>
    </div>
  )
}

export default Product
