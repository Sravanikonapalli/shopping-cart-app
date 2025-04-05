import '../styles/productlist.css'

const ProductList = ({ products, onAdd }) => {
    return (
        <div className='products-con'>
            <h1 className='products-title'>Products</h1>
            <div className='products-wrapper'>
                {products.map(pr => (
                    <div key={pr.id} className="product-card">
                        <div className='product-info'>
                            <h2>{pr.name}</h2>
                            <p>{pr.price}</p>
                            <button className='add-btn' onClick={() => onAdd(pr)}>Add To Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList;
