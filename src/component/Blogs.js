import Blog from "./Blog";
import BlogContext from "../store/blog-context";
import { useContext } from "react";
const Blogs = (props) => {
  const blogCtx = useContext(BlogContext);
  return blogCtx.blogs.map((item) => {
    return (
      <Blog
        key={item.blogId}
        title={item.blogTitle}
        discription={item.blogDescription}
      />
    );
  });
};

export default Blogs;
