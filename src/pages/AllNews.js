import React, { useState, useEffect } from "react";
import {
  getProductsByCount,
} from "../functions/product";
import ProductCard from "../components/cards/ProductCard";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAllProducts();
  }, []);

  // 1. load products by default on page load
  const loadAllProducts = () => {
    getProductsByCount(12).then((p) => {
      setProducts(p.data);
      setLoading(false);
    });
  };

  return (
    <div className="container-fluid pt-5">
      <div className="col-md-12 pt-2">
        {loading ? (
          <h4 className="text-danger">Loading...</h4>
        ) : (
          <div>
            <h2 className="text-center">Latest Games</h2>
            <div className="borderBottom mb-2"></div>
          </div>
        )}

        {products.length < 1 && <p>No Post Found</p>}

        <div className="row pb-5">
          {products.map((p) => (
            <div key={p._id} className="col-sm-6 col-lg-3 mt-3">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
