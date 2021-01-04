import React from "react";
import { Select } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const { Option } = Select;

const ProductUpdateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handleCategoryChange,
  categories,
  subOptions,
  arrayOfSubs,
  setArrayOfSubs,
  selectedCategory,
}) => {
  // destructure
  const {
    title,
    description,
    //price,
    category,
    subs,
    downloadLink,
    size,
    version,
    developer,
    // shipping,
    // quantity,
    images,
    // colors,
    // brands,
    // color,
    // brand,
  } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <ReactQuill
          theme="snow"
          value={description}
          onChange={(value) => setValues({ ...values, description: value })}
        />
      </div>

      <div className="form-group">
        <label>Size</label>
        <input
          type="number"
          name="size"
          className="form-control"
          value={size}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Developer</label>
        <input
          type="text"
          name="developer"
          className="form-control"
          value={developer}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Version</label>
        <input
          type="text"
          name="version"
          className="form-control"
          value={version}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Download Link</label>
        <input
          type="text"
          name="downloadLink"
          className="form-control"
          value={downloadLink}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Category</label>
        <select
          name="category"
          className="form-control"
          onChange={handleCategoryChange}
          value={selectedCategory ? selectedCategory : category._id}
        >
          {categories.length > 0 &&
            categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>

      <div>
        <label>Sub Categories</label>
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Please select"
          value={arrayOfSubs}
          onChange={(value) => setArrayOfSubs(value)}
        >
          {subOptions.length &&
            subOptions.map((s) => (
              <Option key={s._id} value={s._id}>
                {s.name}
              </Option>
            ))}
        </Select>
      </div>

      <br />
      <button className="btn btn-outline-info">Save</button>
    </form>
  );
};

export default ProductUpdateForm;
