import { useState } from "react";
import AddBlogForm from "./component/AddBlogForm";
import Header from "./component/Header";
import Modal from "./component/Model/Modal";
import { BlogContextProvider } from "./store/blog-context";
import Blogs from "./component/Blogs";
function App() {
  const [modalShow, setModalShow] = useState(true);

  const modelShowHandler = () => {
    setModalShow(true);
  };

  const modelCloseHandler = () => {
    setModalShow(false);
  };
  return (
    <BlogContextProvider>
      <div className="App">
        <Header OnShowClickHandler={modelShowHandler} />
        {modalShow && (
          <Modal OnCloseClickHandler={modelCloseHandler}>
            <AddBlogForm></AddBlogForm>
          </Modal>
        )}
        <Blogs />
      </div>
    </BlogContextProvider>
  );
}

export default App;
