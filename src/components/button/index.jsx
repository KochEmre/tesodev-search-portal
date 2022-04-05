import "./button.scss";

const Button = ({ children, ...otherProps }) => {
  return (
    <button
      className="button-style"
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
