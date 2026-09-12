const Button = ({ btnText, className, type = 'button', disabled, ...props }) => {
  return (
    <button type={type} disabled={disabled} className={`${className}`} {...props}>
      {btnText}
    </button>
  );
};

export default Button;