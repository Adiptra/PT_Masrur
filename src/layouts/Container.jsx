import { styles } from "../constants/styles/layoutStyles";

const Container = ({ children, className}) => {
  return (
    <div className={`w-full ${styles.boxWidth} ${className}`}>{children}</div>
  );
};

export default Container;
