import "./button.scss";

const Button = ({ isdisabled, children, ...otherProps }) => {
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
