import { useEffect, useState } from "react";
import "./App.css";
import Basket from "./components/Basket";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";

function App() {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const [balance, setBalance] = useState(1000);
  const [modal, setModal] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      let data = await fetch("https://fakestoreapi.com/products").then((res) =>
        res.json()
      );
      setProducts(data);
      setFilteredProducts(data);
    };
    getdata();
  }, []);

  useEffect(() => {
    let total = basket.reduce((acc, item) => {
      return acc + products.find((a) => a.id === item.id).price * item.count;
    }, 0);
    setTotal(total.toFixed(2));
  }, [basket]);

  const handleFilter = (value) => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };

  return (
    <>
      <Header
        total={total}
        balance={balance - total}
        modal={modal}
        setModal={setModal}
        handleFilter={handleFilter}
        basket={basket}
      />
      <Basket basket={basket} modal={modal} />
      <div className="products">
        {filteredProducts.map((item) => {
          let count = basket.find((count) => count.id === item.id)?.count;
          return (
            <Product
              key={item.id}
              img={item.image}
              price={item.price}
              title={item.title}
              id={item.id}
              count={count || 0}
              residue={balance - total}
              products={products}
              basket={basket}
              setBasket={setBasket}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;