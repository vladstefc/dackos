import styles from "./CustomButton.module.css";

const CustomButton = (props) => {
  return <button onClick={props.onClick}>{props.children}</button>;
};

export default CustomButton;
