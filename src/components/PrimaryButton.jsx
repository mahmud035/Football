// eslint-disable-next-line react/prop-types
const PrimaryButton = ({ children, classes }) => {
  return (
    <button
      className={`btn rounded-lg text-base font-bold capitalize ${classes}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
