import classes from "./Modal.module.css";

const BlackDrop = () => {
  return <div className={classes.blackDrop}></div>;
};

const OverLay = (props) => {
  return (
    <div className={classes.overlay}>
      {props.children}
      <div>
        <button
          onClick={() => {
            props.OnCloseClick();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      <BlackDrop />
      <OverLay OnCloseClick={props.OnCloseClickHandler}>
        {props.children}
      </OverLay>
    </>
  );
};

export default Modal;
