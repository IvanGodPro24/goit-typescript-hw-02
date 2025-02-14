import css from "./LoadMoreBtn.module.css";
import { LoadMoreProps } from "./LoadMoreBtn.types";

const LoadMoreBtn = ({ onLoad }: LoadMoreProps) => {
  return (
    <button className={css.button} onClick={onLoad}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
