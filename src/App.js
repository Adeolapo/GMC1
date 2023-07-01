import logo from './logo.svg';
import './App.css';
import Product from './product';
import values from './array';

function App() {
  return (
    values.map(value => {
     return <Product 
      product= {value.product}
      price= {value.price}
      description={value.description}
      img = {value.img}
      />     
    }
  )
   
  );
}

export default App;
