import React from "react";
import { RegisterBG } from "../../../assets";
import "./blogItem.scss";

const BlogItem = () => {
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBG} alt="blog-item" />
      <div className="content-details">
        <p className="title">Blog Title</p>
        <p className="author">Author - Date Post</p>
        <p className="body">
          Sit nulla aute culpa minim sit amet fugiat et. Incididunt quis mollit
          irure cillum labore dolor occaecat cillum aliquip incididunt. Amet
          sunt exercitation enim sunt amet pariatur ullamco mollit. Ullamco
          deserunt non esse veniam incididunt aliquip Lorem adipisicing est esse
          do in cillum aliqua.
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
