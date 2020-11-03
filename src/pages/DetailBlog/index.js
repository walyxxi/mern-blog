import React from "react";
import { RegisterBG } from "../../assets";
import "./detailBlog.scss";

const DetailBlog = () => {
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBG} alt="thumd" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Tempor nostrud dolore duis officia laboris amet cupidatat non. Id magna
        voluptate commodo sit ut occaecat voluptate magna. Ad aliqua voluptate
        ipsum non tempor ea do mollit. Lorem eiusmod excepteur cillum culpa
        dolor proident sint nisi ex ex et labore culpa sit. Cupidatat
        adipisicing exercitation minim mollit laboris adipisicing incididunt
        proident esse amet et esse aliquip aliqua.
      </p>
    </div>
  );
};

export default DetailBlog; 
