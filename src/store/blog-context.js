import React, { useReducer } from "react";

const BlogContext = React.createContext({
  blogs: [],
  addBlog: (imgUrl, blogTitle, blogDescription) => {},
  editBlog: (blogId) => {},
  deleteBlog: (blogId) => {},
});

const BlogReducer = (state, action) => {
  if (action.type === "ADD") {
    return [...state, action.payload];
  } else if (action.type === "EDIT") {
    return state;
  } else if (action.type === "DELETE") {
    return state;
  } else {
    return state;
  }
};

export const BlogContextProvider = (props) => {
  const [state, dispatch] = useReducer(BlogReducer, []);
  const addBlog = (imgUrl, blogTitle, blogDescription) => {
    dispatch({
      type: "ADD",
      payload: {
        blogId: Date.now(),
        imgUrl,
        blogTitle,
        blogDescription,
      },
    });
    console.log({
      blogId: Date.now(),
      imgUrl,
      blogTitle,
      blogDescription,
    });
  };
  const editBlog = (blogId) => {
    dispatch({ type: "EDIT", payload: blogId });
  };
  const deleteBlog = (blogId) => {
    dispatch({ type: "DELETE", payload: blogId });
  };

  const contextvalue = {
    blogs: state,
    addBlog,
    editBlog,
    deleteBlog,
  };
  return (
    <BlogContext.Provider value={contextvalue}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
