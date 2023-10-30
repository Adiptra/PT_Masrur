import { styles } from "../constants/styles/layoutStyles";

const Container = ({ children, className}) => {
  return (
    <div className={`w-full bg-blue-300 ${styles.boxWidth} ${className}`}>{children}</div>
  );
};

export default Container;
