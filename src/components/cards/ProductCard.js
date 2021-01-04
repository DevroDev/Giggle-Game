import React from "react";
import { Card } from "antd";
import laptop from "../../images/laptop.jpg";
import { Link } from "react-router-dom";
import { showAverage } from "../../functions/rating";

/*<img
  src={images && images.length ? images[0].url : laptop}
  style={{ height: "200px", objectFit: "cover" }}
  className=""
/>*/
const ProductCard = ({ product }) => {
  // destructure
  //console.log(product);
  const { images, title, createdAt, description, category, slug } = product;
  let t = Date.parse(createdAt);
  let time = new Date(t).toLocaleDateString("en-US");

  return (
    <div className="pt-3">
      <Link to={`/news/${slug}`}>
        <div className="post-card">
          <div className="post-card-time">
            <p>{time}</p>
          </div>
          <img
            src={images && images.length ? images[0].url : laptop}
            style={{ height: "200px", width: "100%", objectFit: "cover" }}
            className=""
          />
          <div className="post-card-content">
            {product && product.ratings && product.ratings.length > 0 ? (
              showAverage(product)
            ) : (
              <div className="text-center">
                <p>No Rating Yet</p>
              </div>
            )}
            <Link
              to={`/category/${category.slug}`}
              className="post-card-category"
            >
              {category.name}
            </Link>
            <h4 className="pt-3">{title.substring(0, 30)}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
