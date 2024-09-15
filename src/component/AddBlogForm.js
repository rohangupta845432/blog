import { useContext, useRef } from "react";
import BlogContext from "../store/blog-context";

const AddBlogForm = () => {
  const blogCtx = useContext(BlogContext);
  const imgref = useRef();
  const titleref = useRef();
  const discref = useRef();

  const onSubmitHandlet = (event) => {
    event.preventDefault();
    const imgValue = imgref.current.value;
    const titleValue = titleref.current.value;
    const discValue = discref.current.value;
    blogCtx.addBlog(imgValue, titleValue, discValue);
    imgref.current.value = "";
    titleref.current.value = "";
    discref.current.value = "";
  };
  return (
    <div>
      <form onSubmit={onSubmitHandlet}>
        <div>
          <label>Image Url</label>
          <input type="text" ref={imgref} />
        </div>
        <div>
          <label>Blog Title</label>
          <input type="text" ref={titleref} />
        </div>
        <div>
          <label>Blog Descreption</label>
          <input type="text" ref={discref} />
        </div>
        <button type="submit">Add BlogPost</button>
      </form>
    </div>
  );
};

export default AddBlogForm;
