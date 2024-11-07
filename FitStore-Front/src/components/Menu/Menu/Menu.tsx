import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import CategoryList from '../components/CategoryList';
import Navbar from "./Navbar";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <CategoryList />
    </div>
  );
};


const products = [
  { id: 1, name: "Produto 1", price: 100 },
  { id: 2, name: "Produto 2", price: 150 },
  { id: 3, name: "Produto 3", price: 200 },
];

function Home() {
  return (
    <div>
      <Navbar />
      <h2>Produtos Disponíveis</h2>
      <ProductList products={products} />
    </div>
  );
}

export default Home;

