import Cart from "./Cart";
import ProductList from "./ProductList";
import CartSumarry from "./CartSummary";
import React, {  useState,useEffect } from "react";

const PRODUCTS = [
    { id: 1, name: "Laptop", price: 500 },
    { id: 2, name: "Smartphone", price: 300 },
    { id: 3, name: "Headphones", price: 100 },
    { id: 4, name: "Smartwatch", price: 150 },
  ];
  
  const FREE_GIFT = { id: 99, name: "Wireless Mouse", price: 0 };
  const THRESHOLD = 1000;
  
const Mainshopping=()=>{
    const [products]=useState(PRODUCTS);
    const [cart,setCart]=useState([]);

    const getSubTotal=(cart)=>cart.filter(item=>item.id!==FREE_GIFT.id)
    .reduce((total,item)=>total+item.price*item.quantity,0);

    const subTotal=getSubTotal(cart);

    const total=cart.reduce((total,item)=>total+item.price*item.quantity,0);

    const giftAdded=subTotal>=THRESHOLD;

    useEffect(() => {
        const giftInCart = cart.find(item => item.id === FREE_GIFT.id);
      
        if (subTotal >= THRESHOLD && !giftInCart) {
          setCart(prev => [...prev, { ...FREE_GIFT, quantity: 1 }]);
        } else if (subTotal < THRESHOLD && giftInCart) {
          setCart(prev => prev.filter(item => item.id !== FREE_GIFT.id));
        }
      }, [subTotal, cart]);
      

    const addToCart=(product)=>{
        setCart(prev=>{
            const existing=prev.find(item=>item.id===product.id);
            if (existing) {
                return prev.map(item=>item.id===product.id 
                    ?{...item,quantity:item.quantity+1}:item)
            }
            return [...prev,{...product,quantity:1}];
        });
    };

    const increaseQuantity=(id)=>{
        setCart(prev=>prev.map(item=>item.id===id?
            {...item,quantity:item.quantity+1} :item
        ))
    }

    const decreaseQunatity=(id)=>{
        setCart(prev=>prev.map(item=>item.id===id?
            {...item,quantity:item.quantity-1} :item
        ).filter(item=>item.quantity>0))
    };


    return (
        <div>
            <ProductList products={products} onAdd={addToCart}/>
            <CartSumarry subTotal={subTotal} total={total} threshold={THRESHOLD} giftAdded={giftAdded}/>
            <Cart cart={cart} onIncrease={increaseQuantity} onDecrease={decreaseQunatity}/>
        </div>
    )
}


export default Mainshopping;
