import React from "react";
import { Card, Tabs } from "antd";
import { DownloadOutlined, InfoOutlined } from "@ant-design/icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Laptop from "../../images/laptop.jpg";
import StarRating from "react-star-ratings";
import RatingModal from "../modal/RatingModal";
import { showAverage } from "../../functions/rating";
import ProductListItems from "../cards/ProductListItems";

// this is childrend component of Product page
const SingleProduct = ({ product, onStarClick, star }) => {
  const { title, images, description, createdAt, _id, downloadLink } = product;

  return (
    <div className="container single-post">
      {images && images.length ? (
        <Card
          cover={
            images &&
            images.map((i) => (
              <img src={i.url} key={i.public_id} className="mb-1 card-image" />
            ))
          }
        ></Card>
      ) : (
        <Card cover={<img src={Laptop} className="mb-1 card-image" />}></Card>
      )}
      <div className="single-post-content">
        <h1 className="text-center">{title}</h1>

        {product && product.ratings && product.ratings.length > 0 ? (
          showAverage(product)
        ) : (
          <div className="text-center py-5">
            <h4>No Rating Yet</h4>
          </div>
        )}
        <ProductListItems product={product} />
        <h3 className="text-center pt-3">Description</h3>
        <div
          className="col-12"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>

        <Card
          actions={[
            <>
              <InfoOutlined className="text-success" /> <br />
              How to Download
            </>,
            <a href={downloadLink}>
              <DownloadOutlined className="text-info" /> <br /> Download
            </a>,
            <RatingModal>
              <StarRating
                name={_id}
                numberOfStars={5}
                rating={star}
                changeRating={onStarClick}
                isSelectable={true}
                starRatedColor="red"
              />
            </RatingModal>,
          ]}
        ></Card>
      </div>
    </div>
  );
};

export default SingleProduct;
