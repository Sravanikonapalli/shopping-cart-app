import '../styles/cartsummary.css'
const CartSumarry=({subTotal,total,threshold,giftAdded})=>{
    const progress=Math.min((subTotal/threshold)*100,100);
    return (
        <div>
            <h1>CartSummary</h1>
            <div className='cartsumary-con'>
            <div className='amount'>
            <p>SubTotal: </p>
            <p>Rs.{subTotal}</p>
            </div>

            {!giftAdded ?(
                <div>
                   <p className='para'>Add Rs.{threshold-subTotal} more than to get a fre wireless mouse!</p> 
                   <div style={{background:'#ddd',height:'20px',borderRadius:'10px'}}>
                    <div
                    style={{
                        background:'blue',
                        width:`${progress}%`,
                        height:'100%',
                        borderRadius:'10px',
                    }}>
                    </div>
                    </div>
                </div>
            ):(
                <div>
                    <hr/>
                    <p>You got a free wireless mouse!</p>
                </div>
            )}
        </div>
        </div>
    )
}
export default CartSumarry;