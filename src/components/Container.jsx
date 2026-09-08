
const Container = ({ children, className }) => {
  return (
    <div className={`w-full lg:max-w-295 lg:m-auto ${className}`}>{children}</div>
  );
};

export default Container;