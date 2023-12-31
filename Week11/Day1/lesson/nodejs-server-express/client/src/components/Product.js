import { useParams, Link, useNavigate, } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import {AppContext} from "../App.js"
//
const Product = (props) => {
  const [product, setProduct] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const param = useParams();
  const navigate = useNavigate()
  const {token} = useContext(AppContext)
  //
  console.log("param=>", param);
  
  useEffect(() => {
    getProductInfo();
  }, []);

  const getProductInfo = async () => {
    try {
      const res = await fetch(`/api/products/${param.id}`);
      const data = await res.json();
      setProduct(data);
      setName(data[0].name);
      setPrice(data[0].price);
    } catch (e) {
      console.log(e);
    }
  };
  //
  const update = async (e) => {
    try {
    e.preventDefault(); 
      const res = await fetch(`/api/products/${param.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, price }),
      });
      const data = await res.json();
      setProduct(data);
      setName(data[0].name);
      setPrice(data[0].price);
    } catch (e) {
      console.log(e);
    }
  };
  //

  const del = async () => {
    try {
      const res = await fetch(`/api/products/${param.id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      navigate('/')
    } catch (e) {
      console.log(e);
    }
  };
  //
  return (
    <div>
      <h1>Product... {param.id}</h1>
      <div>
        <h2>Update Product</h2>
        <form onSubmit={update}>
          Name: <input value={name} onChange={(e) => setName(e.target.value)} />
          Price:{" "}
          <input value={price} onChange={(e) => setPrice(e.target.value)} />
          <input type="submit" value="Update" />
        </form>
      </div>
      <div>
        <h2>Delete Product</h2>
        <button onClick={del}>Delete</button>
      </div>
      {console.log("Product: ", product)}
      {product && product.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <h4>{item.price}</h4>
          </div>
        );
      })}
      <Link to="/">Back to Shop</Link>
    </div>
  );
};
export default Product;
