import '../styles/productlist.css'
const ProductList=(props)=>{
    const {products,onAdd}=props
    return (
        <div className='products-con'>
            <h1>Products</h1>
            {products.map(pr=>(
                <div key={pr.id} className="product-card">
                    <div className='product-info'>
                    <h2>{pr.name}</h2>
                    <p>{pr.price}</p>
                    
                    <button className='add-btn' onClick={()=>onAdd(pr)}>Add To Cart</button>
                </div>
                </div>
            ))}
        </div>
    )
   
}

export default ProductList;