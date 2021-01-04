import React from "react";
import { Link } from "react-router-dom";

const ProductListItems = ({ product }) => {
  const {
    //price,
    category,
    subs,
    createdAt,
    version,
    developer,
    // shipping,
    // color,
    // brand,
    // quantity,
    // sold,
  } = product;

  let t = Date.parse(createdAt);
  let time = new Date(t).toLocaleDateString("en-US");

  return (
    <ul className="list-group productListCard">
      {category && (
        <li className="list-group-item">
          Category{" "}
          <Link
            to={`/category/${category.slug}`}
            className="label label-default label-pill pull-xs-right"
          >
            {category.name}
          </Link>
        </li>
      )}

      {subs && (
        <li className="list-group-item">
          Sub Categories
          {subs.map((s) => (
            <Link
              key={s._id}
              to={`/sub/${s.slug}`}
              className="label label-default label-pill pull-xs-right"
            >
              {s.name}
            </Link>
          ))}
        </li>
      )}

      <li className="list-group-item">
        Developer
        <Link className="label label-default label-pill pull-xs-right">
          {developer}
        </Link>
      </li>
      <li className="list-group-item">
        Version
        <Link className="label label-default label-pill pull-xs-right">
          {version}
        </Link>
      </li>
      <li className="list-group-item">
        Updated On
        <Link className="label label-default label-pill pull-xs-right">
          {time}
        </Link>
      </li>
    </ul>
  );
};

export default ProductListItems;
