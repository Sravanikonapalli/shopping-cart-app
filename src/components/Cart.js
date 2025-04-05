import '../styles/cart.css'
const FREE_GIFT_ID=99;
const Cart=(props)=>{
    const {cart ,onDecrease,onIncrease}=props

    return (
        <div>
            <h2>Cart Items</h2>
            <div>
            {cart.length===0 ? (
                <div className='cart-con'>
                <h3>Your Cart is empty</h3>
                <p>Add some products to see them here!</p>
                </div>
            ):(
                <ul>
                    {cart.map(item=>(
                        <li key={item.id} className='cart-con'>
                            <div className='cart-items'>
                            <div>
                            {item.name} <br/>
                            Rs.{item.price} - {item.quantity}={item.price*item.quantity}
                            </div>
                            <div>
                                {item.id===FREE_GIFT_ID ?(
                                    <span className='free-gift'>Free Gift</span>
                                ):(
                                    <span className='controls-btns'>
                                        <button className="minus-btn" onClick={()=>onDecrease(item.id)}>Decrease</button>
                                        {item.quantity}
                                        <button className='plus-btn' onClick={()=>onIncrease(item.id)}>Increase</button>
                                    </span>
                                )}
                            </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
        </div>
    )

}
export default Cart