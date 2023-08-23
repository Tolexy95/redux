import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

//component
import CardComponent from "./component/CardComponet";

//slices
import { changeCurrency } from "./Redux/features/switchCurrencySlice";
import { addToCart, updatePrice } from "./Redux/features/productCartSlice";

const dummyData = [
  {
    image:
      "https://www.detailafrica.com/wp-content/uploads/2021/03/Detail-Africa-Signature-Briefcase-Front-View-570x718.png",
    name: "signature briefcase",
    dollarPrice: "$234",
    nairaPrice: "₦130,000",
  },
  {
    image:
      "https://www.detailafrica.com/wp-content/uploads/2021/03/Detail-Africa-Signature-Briefcase-Front-View-570x718.png",
    name: "black briefcase",
    dollarPrice: "$134",
    nairaPrice: "₦80,000",
  },
  {
    image:
      "https://www.detailafrica.com/wp-content/uploads/2021/03/Detail-Africa-Signature-Briefcase-Front-View-570x718.png",
    name: "black briefcase",
    dollarPrice: "$334",
    nairaPrice: "₦230,000",
  },
  {
    image:
      "https://www.detailafrica.com/wp-content/uploads/2021/03/Detail-Africa-Signature-Briefcase-Front-View-570x718.png",
    name: "red briefcase",
    dollarPrice: "$364",
    nairaPrice: "₦730,000",
  },
];

  function App() {
  const [product, setProduct] = useState(dummyData);
  const dispatch = useDispatch();
  
 
  const currencyType = useSelector((state) => state.currency.currencyType);
  const cartItems = useSelector((state) => state.product.value);
  const totalPrice = useSelector((state) => state.product.price);

  function toggleCurrency(newCurrencyType) {
    dispatch(changeCurrency(newCurrencyType)); 
  }

function handleAddToCart(item) {
    dispatch(addToCart(item)); 
}

  return (
    <div className="appContainer">
      <div className="btnContain">
        <button onClick={() => toggleCurrency('NGN')} className="btn nairaBtn">NGN</button>
        <button onClick={() => toggleCurrency('USD')} className="btn dollarBtn">USD</button>
      </div>

      <div>
      <p>Total quantity: {cartItems}</p>
        
        <p>Total price:</p>
      </div>

      <div className="cardContain">
        {product.map((item, index) => {
          return (
            <div key={index}>
              <CardComponent image={item.image} />

              <div className="wordApp">
                <p>{item.name}</p>
                {currencyType === 'USD' ? (
                  <p>{item.dollarPrice}</p>
                ) : (
                  <p>{item.nairaPrice}</p>
                )}
                <button onClick={() => handleAddToCart(item)}>Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
