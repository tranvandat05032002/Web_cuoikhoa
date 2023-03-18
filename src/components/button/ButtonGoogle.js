import React from "react";
import PropTypes from "prop-types";
import { ErrorBoundary, withErrorBoundary } from "react-error-boundary";

const ButtonGoogle = ({ text = "Sign up with google", onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-full py-[13px] gap-x-[10px] mb-5 dark:border-darkStroke font-medium border border-strock rounded-[10px]"
    >
      <img srcSet="/google.png 2x" alt="icon-google" />
      <span className="text-base text-text2 dark:text-white">{text}</span>
    </button>
  );
};
ButtonGoogle.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
export default withErrorBoundary(ButtonGoogle, {
  FallbackComponent: ErrorBoundary,
});
