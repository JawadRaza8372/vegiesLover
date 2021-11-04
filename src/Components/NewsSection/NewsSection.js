import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import "./NewsSection.scss";
function NewsSection() {
  return (
    <section className="newsSection">
      <div className="customContain">
        <h1 className="pheading">Latest News From Blog</h1>
        <div className="blogWrapper">
          <BlogCard content={1} />
          <BlogCard content={2} />
          <BlogCard content={1} />
          <BlogCard content={2} />
          <BlogCard content={1} />
          <BlogCard content={2} />
          <BlogCard content={1} />
          <BlogCard content={2} />
          <BlogCard content={1} />
          <BlogCard content={2} />
          <BlogCard content={1} />
          <BlogCard content={2} />
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
