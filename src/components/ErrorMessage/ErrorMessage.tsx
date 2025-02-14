import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return <p className={css.error}>Error. Something went wrong.</p>;
};

export default ErrorMessage;
