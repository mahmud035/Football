/* eslint-disable react/prop-types */

const SecondaryButton = ({ children, classes }) => {
  return (
    <button
      className={`btn rounded-full text-base font-bold capitalize ${classes}`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
