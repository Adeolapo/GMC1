
function Product(prop){
    return(
        <div className="containers">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1685647727349-e71d679b1aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <h1>{prop.product}</h1>
            <p>{prop.description}</p>
            <p>{prop.price}</p>
          </div>
        </div>
        
    );
}

export default Product