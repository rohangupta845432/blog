import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <h3>Blog Website</h3>
      <button
        onClick={() => {
          props.OnShowClickHandler();
        }}
      >
        Add Blog
      </button>
    </div>
  );
};

export default Header;
